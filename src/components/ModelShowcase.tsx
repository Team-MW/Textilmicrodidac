import Image from "next/image";

export function ModelShowcase() {
  return (
    <div className="model-stage" aria-hidden="true">
      <div className="model-slide model-slide--solo">
        <div className="model-slide__frame">
          <Image
            src="/models/model-altivia.png"
            alt=""
            width={1200}
            height={900}
            priority
            className="model-slide__img"
          />
        </div>
      </div>
    </div>
  );
}
