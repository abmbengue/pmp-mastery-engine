"use client";

import { useCallback, useRef, useState } from "react";

export function ShortMediaPlayer({
  videoUrl,
  isPlaceholder,
  title,
  labels,
}: {
  videoUrl: string | null;
  isPlaceholder: boolean;
  title: string;
  labels: {
    placeholder: string;
    comingSoon: string;
    play: string;
    pause: string;
    progress: string;
    hook: string;
    concept: string;
    example: string;
    takeaway: string;
  };
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggle = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      void el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  }, []);

  if (!videoUrl || isPlaceholder) {
    return (
      <div
        className="mt-6 space-y-2 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center"
        data-testid="short-video-placeholder"
        role="region"
        aria-label={title}
      >
        <p className="text-sm font-semibold text-gray-800">{labels.hook}</p>
        <p className="text-sm text-gray-700">{labels.concept}</p>
        <p className="text-sm text-gray-700">{labels.example}</p>
        <p className="text-sm font-medium text-gray-900">{labels.takeaway}</p>
        <p className="mt-3 text-xs text-amber-800">{labels.comingSoon}</p>
        <p className="text-xs text-gray-500">{labels.placeholder}</p>
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-3" data-testid="short-video-player">
      <video
        ref={videoRef}
        className="aspect-video w-full rounded-lg bg-black"
        src={videoUrl}
        controls
        playsInline
        preload="metadata"
        aria-label={title}
        onTimeUpdate={(e) => {
          const el = e.currentTarget;
          if (el.duration > 0) {
            setProgress(Math.round((el.currentTime / el.duration) * 100));
          }
        }}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="min-h-11 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={toggle}
          aria-pressed={playing}
          data-testid="short-play-toggle"
        >
          {playing ? labels.pause : labels.play}
        </button>
        <div className="min-w-[8rem] flex-1" aria-label={labels.progress}>
          <div className="h-2 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-blue-600"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              data-testid="short-progress-bar"
            />
          </div>
          <p className="mt-1 text-xs text-gray-600">
            {labels.progress}: {progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
