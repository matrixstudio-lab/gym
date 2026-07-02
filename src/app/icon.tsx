import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0b08",
          borderRadius: 7,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="9" width="3" height="6" rx="1" fill="#c6ff3d" />
          <rect x="5.5" y="7" width="2.5" height="10" rx="1" fill="#c6ff3d" />
          <rect x="8.5" y="10.5" width="7" height="3" rx="1" fill="#c6ff3d" />
          <rect x="16" y="7" width="2.5" height="10" rx="1" fill="#c6ff3d" />
          <rect x="19" y="9" width="3" height="6" rx="1" fill="#c6ff3d" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
