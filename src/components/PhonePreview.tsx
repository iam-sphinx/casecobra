"use client";

import { CaseColor } from "@prisma/client";
import { useEffect, useRef, useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { GSP_NO_RETURNED_VALUE } from "next/dist/lib/constants";

const PhonePreview = ({
  croppedImageUrl,
  color,
}: {
  croppedImageUrl: string;
  color: CaseColor;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [renderedDimension, setRenderedDimension] = useState({
    height: 0,
    width: 0,
  });
  const handleResize = () => {
    if (!ref.current) return;
    const { width, height } = ref.current?.getBoundingClientRect();
    setRenderedDimension({ width, height });
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref.current]);
  let caseBackgoundColor = "bg-zinc-950";
  if (color === "blue") caseBackgoundColor = "bg-blue-950";
  if (color === "rose") caseBackgoundColor = "bg-rose-950";

  return (
    <AspectRatio ref={ref} ratio={3000 / 2001} className="relative">
      <div
        className="absolute z-20 scale-[1.0352]"
        style={{
          left:
            renderedDimension.width / 2 -
            renderedDimension.width / (1216 / 121),
          top: renderedDimension.height / 6.22,
        }}
      >
        <img
          width={renderedDimension.width / (3000 / 637)}
          className={cn(
            "phone-skew relative z-20 rounded-t-[15px] rounded-b-[10px] md:rounded-t-[30px] md:rounded-b-[20px]",
            caseBackgoundColor
          )}
          src={croppedImageUrl}
        />
      </div>
      <div className="relative h-full w-full z-40">
        <img
          alt="phone"
          src="/clearphone.png"
          className="pointer-events-none size-full antialiased rounded-md"
        />
      </div>
    </AspectRatio>
  );
};

export default PhonePreview;
