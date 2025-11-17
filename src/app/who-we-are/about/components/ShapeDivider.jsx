export default function ShapeDivider({ direction = "right", fill = "#ffffff", shape = "wave" }) {
  const baseClass = `absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-0 ${
    direction === "left" ? "rotate-180" : ""
  }`;

  return (
    <div className={baseClass}>
      {shape === "wave" && (
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-[100px]">
          <path
            d="M0.00,49.98 C150.00,150.00 349.47,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
            fill={fill}
          ></path>
        </svg>
      )}

      {shape === "curve" && (
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-[100px]">
          <path
            d="M0,0 C150,100 350,0 500,100 L500,0 L0,0 Z"
            fill={fill}
          ></path>
        </svg>
      )}

      {shape === "tilt" && (
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-[100px]">
          <polygon fill={fill} points="0,100 100,0 100,100" />
        </svg>
      )}

      {shape === "diagonal" && (
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-[100px]">
          <polygon fill={fill} points="0,100 100,90 100,100 0,100" />
        </svg>
      )}
    </div>
  );
}
