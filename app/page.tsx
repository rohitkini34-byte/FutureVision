"use client";

import {
  useState,
  useRef,
  useCallback,
  useEffect,
  type ChangeEvent,
} from "react";
import {
  Camera,
  Upload,
  ChevronDown,
  Search,
  Loader2,
  Download,
  RefreshCw,
  X,
  CheckCircle2,
  Star,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";
import {
  CAREERS,
  OTHER_CAREER,
  type Career,
  getSalutation,
  getDisplayName,
  getImagePrompt,
} from "@/lib/careers";

// ─── Types ────────────────────────────────────────────────────────────────────

type AppState = "form" | "loading" | "result";

interface FormState {
  studentName: string;
  career: Career | null;
  customCareer: string;
  imageFile: File | null;
  imagePreview: string | null;
}

// ─── Image compression helper ─────────────────────────────────────────────────

async function compressImage(file: File, maxPx = 1024): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const canvas = document.createElement("canvas");
      let { width, height } = img;
      if (width > maxPx || height > maxPx) {
        const ratio = Math.min(maxPx / width, maxPx / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL("image/jpeg", 0.85));
    };
    img.onerror = reject;
    img.src = url;
  });
}

// ─── Career Dropdown ──────────────────────────────────────────────────────────

function CareerDropdown({
  selected,
  onSelect,
}: {
  selected: Career | null;
  onSelect: (c: Career) => void;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const allCareers = [...CAREERS, OTHER_CAREER];
  const filtered = allCareers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={dropRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl border-2 text-left transition-all duration-200 ${
          selected
            ? "border-blue-500 bg-blue-50 text-gray-900"
            : "border-gray-200 bg-white text-gray-400 hover:border-blue-300"
        }`}
      >
        <span className={selected ? "font-medium text-gray-800" : ""}>
          {selected ? selected.name : "Select your dream career…"}
        </span>
        <ChevronDown
          size={18}
          className={`text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
          {/* Search bar */}
          <div className="p-3 border-b border-gray-100">
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
              <Search size={16} className="text-gray-400 shrink-0" />
              <input
                ref={searchRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search career…"
                className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder-gray-400"
              />
              {search && (
                <button onClick={() => setSearch("")}>
                  <X size={14} className="text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
          </div>

          {/* List */}
          <div className="max-h-64 overflow-y-auto overscroll-contain">
            {filtered.length === 0 ? (
              <p className="px-4 py-6 text-center text-sm text-gray-400">
                No careers match "{search}"
              </p>
            ) : (
              filtered.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    onSelect(c);
                    setOpen(false);
                    setSearch("");
                  }}
                  className={`w-full text-left px-4 py-3 text-sm hover:bg-blue-50 transition-colors flex items-center gap-3 ${
                    selected?.id === c.id
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  {selected?.id === c.id ? (
                    <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                  ) : (
                    <div className="w-4 shrink-0" />
                  )}
                  {c.name}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Loading View ─────────────────────────────────────────────────────────────

function LoadingView({
  progress,
  career,
}: {
  progress: number;
  career: string;
}) {
  const messages = [
    "Analysing your photo…",
    `Imagining you as a ${career}…`,
    "Rendering futuristic details…",
    "Adding professional polish…",
    "Almost there — your portrait is coming to life!",
  ];

  const msgIndex = Math.min(
    Math.floor((progress / 100) * messages.length),
    messages.length - 1
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 animate-fade-in">
      {/* Animated rings */}
      <div className="relative w-32 h-32 mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-blue-100 animate-pulse" />
        <div
          className="absolute inset-2 rounded-full border-4 border-saffron-400 animate-spin"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute inset-4 rounded-full border-4 border-blue-700 animate-spin"
          style={{ animationDuration: "2s", animationDirection: "reverse" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 size={32} className="text-blue-700 animate-spin" />
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
        Generating Your Vision
      </h2>
      <p className="text-sm text-gray-500 mb-8 text-center min-h-[20px] transition-all">
        {messages[msgIndex]}
      </p>

      {/* Progress bar */}
      <div className="w-full max-w-sm">
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
          <div
            className="h-full rounded-full progress-shimmer transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <p className="mt-8 text-xs text-gray-400 text-center">
        This usually takes 20–40 seconds
      </p>
    </div>
  );
}

// ─── Career Roadmap ───────────────────────────────────────────────────────────

function CareerRoadmap({ career }: { career: Career }) {
  return (
    <div className="mt-8 animate-slide-up">
      <div className="flex items-center gap-2 mb-5">
        <Star size={18} className="text-saffron-500" />
        <h3 className="text-base font-bold text-gray-800">
          Career Roadmap in India
        </h3>
      </div>

      <div className="relative">
        {career.roadmap.map((step, i) => (
          <div key={i} className="flex gap-4 mb-1">
            {/* Stepper line + dot */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-saffron-400 to-blue-700 flex items-center justify-center shrink-0 shadow-md">
                <span className="text-white text-xs font-bold">{i + 1}</span>
              </div>
              {i < career.roadmap.length - 1 && (
                <div className="w-0.5 flex-1 stepper-line my-1 min-h-[24px]" />
              )}
            </div>

            {/* Content */}
            <div
              className={`pb-5 flex-1 ${i === career.roadmap.length - 1 ? "pb-0" : ""}`}
            >
              <p className="text-sm font-semibold text-gray-800">{step.label}</p>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Result View ──────────────────────────────────────────────────────────────

function ResultView({
  imageDataUrl,
  studentName,
  career,
  customCareer,
  onReset,
}: {
  imageDataUrl: string;
  studentName: string;
  career: Career;
  customCareer: string;
  onReset: () => void;
}) {
  const salutation = getSalutation(career);
  const careerName = getDisplayName(career, customCareer);
  const displayName = salutation
    ? `${salutation} ${studentName}`
    : studentName;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleDownload = useCallback(async () => {
    // Load all images then composite on canvas
    const canvas = document.createElement("canvas");
    const portrait = new window.Image();
    portrait.crossOrigin = "anonymous";

    await new Promise<void>((res) => {
      portrait.onload = () => res();
      portrait.src = imageDataUrl;
    });

    canvas.width = portrait.naturalWidth;
    canvas.height = portrait.naturalHeight;
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(portrait, 0, 0);

    // Name bar gradient
    const barH = Math.round(canvas.height * 0.2);
    const grad = ctx.createLinearGradient(0, canvas.height - barH, 0, canvas.height);
    grad.addColorStop(0, "rgba(15,45,107,0)");
    grad.addColorStop(0.4, "rgba(15,45,107,0.75)");
    grad.addColorStop(1, "rgba(15,45,107,0.97)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, canvas.height - barH, canvas.width, barH);

    // Name text
    const fontSize = Math.round(canvas.width * 0.065);
    ctx.font = `700 ${fontSize}px Inter, sans-serif`;
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(displayName, canvas.width / 2, canvas.height - barH / 2 + fontSize * 0.15);

    // Career label below name
    const subSize = Math.round(fontSize * 0.5);
    ctx.font = `400 ${subSize}px Inter, sans-serif`;
    ctx.fillStyle = "rgba(255,200,100,0.9)";
    ctx.fillText(careerName, canvas.width / 2, canvas.height - barH / 2 + fontSize * 0.85);

    // Try to overlay logo
    try {
      const logo = new window.Image();
      logo.crossOrigin = "anonymous";
      await new Promise<void>((res, rej) => {
        logo.onload = () => res();
        logo.onerror = () => rej();
        logo.src = "/logo.png";
      });
      const logoSize = Math.round(canvas.width * 0.22);
      const pad = Math.round(canvas.width * 0.03);
      ctx.globalAlpha = 0.9;
      ctx.drawImage(logo, canvas.width - logoSize - pad, pad, logoSize, logoSize);
      ctx.globalAlpha = 1;
    } catch {
      // Logo not found — skip silently
    }

    // Download
    canvas.toBlob((blob) => {
      if (!blob) return;
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `FutureVision_${studentName.replace(/\s+/g, "_")}_${careerName}.jpg`;
      link.click();
      URL.revokeObjectURL(link.href);
    }, "image/jpeg", 0.95);
  }, [imageDataUrl, displayName, careerName, studentName]);

  return (
    <div className="animate-fade-in">
      {/* Portrait with overlays */}
      <div
        className="relative w-full overflow-hidden rounded-2xl shadow-2xl"
        style={{ aspectRatio: "3/4", maxHeight: "75vh" }}
      >
        <Image
          src={imageDataUrl}
          alt={`${displayName} — ${careerName}`}
          fill
          className="object-cover"
          unoptimized
          priority
        />

        {/* Logo — top right */}
        <div className="absolute top-3 right-3 z-10">
          <div className="w-20 h-20 relative">
            <Image
              src="/logo.png"
              alt="The Giving Tree Foundation"
              fill
              className="object-contain drop-shadow-lg"
              unoptimized
            />
          </div>
        </div>

        {/* Name bar — bottom */}
        <div className="absolute bottom-0 left-0 right-0 image-name-bar px-5 pt-10 pb-5 z-10">
          <p className="text-white font-bold text-2xl leading-tight drop-shadow-md">
            {displayName}
          </p>
          <p className="text-yellow-300 text-sm font-medium mt-0.5 opacity-90">
            {careerName}
          </p>
        </div>

        {/* Tricolor strip top */}
        <div className="absolute top-0 left-0 right-0 h-1.5 tricolor-bar z-10" />
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-5">
        <button
          onClick={handleDownload}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold py-3.5 rounded-xl shadow-lg active:scale-95 transition-transform"
        >
          <Download size={18} />
          Save Photo
        </button>
        <button
          onClick={onReset}
          className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 font-semibold px-5 py-3.5 rounded-xl active:scale-95 transition-transform"
        >
          <RefreshCw size={18} />
          New
        </button>
      </div>

      {/* Roadmap */}
      <CareerRoadmap career={career} />

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function Home() {
  const [appState, setAppState] = useState<AppState>("form");
  const [form, setForm] = useState<FormState>({
    studentName: "",
    career: null,
    customCareer: "",
    imageFile: null,
    imagePreview: null,
  });
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  // Handle any image file selection
  const handleImageFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file (JPG, PNG, HEIC, etc.).");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      setForm((p) => ({
        ...p,
        imageFile: file,
        imagePreview: e.target?.result as string,
      }));
      setError(null);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleImageFile(file);
  };

  const isValid =
    form.studentName.trim().length > 0 &&
    form.career !== null &&
    (form.career.id !== "other" || form.customCareer.trim().length > 0) &&
    form.imageFile !== null;

  const handleGenerate = async () => {
    if (!isValid || !form.imageFile || !form.career) return;

    setError(null);
    setAppState("loading");
    setProgress(5);

    // Simulate realistic progress
    const intervals: ReturnType<typeof setTimeout>[] = [];
    const tick = () => {
      setProgress((prev) => {
        if (prev >= 82) return prev;
        const increment = prev < 40 ? 8 : prev < 65 ? 5 : 2;
        return Math.min(prev + increment * Math.random(), 82);
      });
    };
    const progressTimer = setInterval(tick, 900);

    try {
      const compressed = await compressImage(form.imageFile);
      const base64 = compressed.split(",")[1];
      const mimeType = "image/jpeg";
      const prompt = getImagePrompt(form.career, form.customCareer);

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64: base64, mimeType, prompt }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Generation failed.");

      clearInterval(progressTimer);
      setProgress(100);

      setTimeout(() => {
        setGeneratedImage(data.imageBase64);
        setAppState("result");
      }, 600);
    } catch (err: unknown) {
      clearInterval(progressTimer);
      intervals.forEach(clearTimeout);
      const msg =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(msg);
      setAppState("form");
    }
  };

  const handleReset = () => {
    setForm({
      studentName: "",
      career: null,
      customCareer: "",
      imageFile: null,
      imagePreview: null,
    });
    setGeneratedImage(null);
    setProgress(0);
    setError(null);
    setAppState("form");
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (cameraInputRef.current) cameraInputRef.current.value = "";
  };

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-dvh bg-gradient-to-b from-slate-50 to-blue-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-40">
        <div className="tricolor-bar h-1" />
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-extrabold text-blue-900 leading-tight">
              FutureVision{" "}
              <span className="text-saffron-500">India</span>
            </h1>
            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
              See Your Future Self
            </p>
          </div>
          <div className="w-10 h-10 relative">
            <Image
              src="/logo.png"
              alt="The Giving Tree Foundation"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-lg mx-auto w-full px-4 py-6">
        {/* ── FORM ── */}
        {appState === "form" && (
          <div className="animate-fade-in space-y-5">
            {/* Hero */}
            <div className="text-center mb-2">
              <h2 className="text-2xl font-extrabold text-gray-900">
                Who will you become?
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Take a photo, pick your dream career, and watch AI transform your future.
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm animate-slide-up">
                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                <p>{error}</p>
              </div>
            )}

            {/* Photo capture card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Step 1 — Your Photo
              </p>

              {form.imagePreview ? (
                <div className="relative">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 max-h-56">
                    <Image
                      src={form.imagePreview}
                      alt="Your photo"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <button
                    onClick={() => {
                      setForm((p) => ({ ...p, imageFile: null, imagePreview: null }));
                      if (fileInputRef.current) fileInputRef.current.value = "";
                      if (cameraInputRef.current) cameraInputRef.current.value = "";
                    }}
                    className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-1.5 hover:bg-black/80 transition-colors"
                  >
                    <X size={16} />
                  </button>
                  <div className="absolute bottom-2 left-2 bg-green-500 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle2 size={12} />
                    Photo ready
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {/* Camera */}
                  <button
                    type="button"
                    onClick={() => cameraInputRef.current?.click()}
                    className="flex flex-col items-center justify-center gap-2 bg-blue-50 border-2 border-dashed border-blue-200 rounded-xl py-6 text-blue-700 hover:bg-blue-100 transition-colors active:scale-95"
                  >
                    <Camera size={28} />
                    <span className="text-xs font-semibold">Take Photo</span>
                  </button>

                  {/* Upload */}
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex flex-col items-center justify-center gap-2 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl py-6 text-gray-600 hover:bg-gray-100 transition-colors active:scale-95"
                  >
                    <Upload size={28} />
                    <span className="text-xs font-semibold">Upload Photo</span>
                  </button>
                </div>
              )}

              {/* Hidden inputs */}
              <input
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileChange}
                className="hidden"
              />
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />

              <p className="text-[11px] text-gray-400 text-center mt-2">
                Best results: clear face, good lighting, looking straight
              </p>
            </div>

            {/* Name input */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Step 2 — Your Name
              </p>
              <input
                type="text"
                value={form.studentName}
                onChange={(e) =>
                  setForm((p) => ({ ...p, studentName: e.target.value }))
                }
                placeholder="Enter your full name…"
                className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-gray-800 placeholder-gray-400 text-sm transition-colors"
              />
            </div>

            {/* Career dropdown */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Step 3 — Dream Career
              </p>
              <CareerDropdown
                selected={form.career}
                onSelect={(c) =>
                  setForm((p) => ({ ...p, career: c, customCareer: "" }))
                }
              />

              {/* Other career text input */}
              {form.career?.id === "other" && (
                <input
                  type="text"
                  value={form.customCareer}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, customCareer: e.target.value }))
                  }
                  placeholder="Type your career here…"
                  className="w-full mt-3 px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-gray-800 placeholder-gray-400 text-sm transition-colors animate-slide-up"
                  autoFocus
                />
              )}
            </div>

            {/* CTA */}
            <button
              onClick={handleGenerate}
              disabled={!isValid}
              className={`w-full py-4 rounded-2xl font-bold text-base shadow-lg transition-all duration-200 ${
                isValid
                  ? "bg-gradient-to-r from-saffron-500 to-orange-500 text-white active:scale-95 hover:shadow-xl"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              {isValid ? "✨ See My Future Self" : "Complete all steps above"}
            </button>

            {/* Tips */}
            <div className="bg-blue-900 rounded-2xl p-4 text-white">
              <p className="text-xs font-bold uppercase tracking-wider mb-2 opacity-70">
                Tips for best results
              </p>
              <ul className="space-y-1 text-xs opacity-80">
                <li>📸 Face clearly visible, well-lit</li>
                <li>😊 Look directly at the camera</li>
                <li>🚫 Avoid sunglasses or face coverings</li>
                <li>🖼️ Portrait orientation works best</li>
              </ul>
            </div>
          </div>
        )}

        {/* ── LOADING ── */}
        {appState === "loading" && (
          <LoadingView
            progress={progress}
            career={
              form.career
                ? getDisplayName(form.career, form.customCareer)
                : "your dream"
            }
          />
        )}

        {/* ── RESULT ── */}
        {appState === "result" && generatedImage && form.career && (
          <ResultView
            imageDataUrl={generatedImage}
            studentName={form.studentName}
            career={form.career}
            customCareer={form.customCareer}
            onReset={handleReset}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-xs text-gray-400 border-t border-gray-100 bg-white">
        <p>
          Powered by Google Gemini AI ·{" "}
          <span className="text-saffron-500 font-medium">
            The Giving Tree Foundation
          </span>
        </p>
      </footer>
    </div>
  );
}
