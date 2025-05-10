import TextBackground from "./text-background";
import Image from "next/image";
const MagicTextBackground = ({title} : {title : string}) => {
  return (
    <div className="flex items-center gap-1">
      <Image src="/static/images/icon/shop/stars.svg" alt="" width={20} height={20} />
      <TextBackground className="text-sm" bgColor="#0c0d1158">
        {title}
      </TextBackground>
    </div>
  );
};
export default MagicTextBackground;
