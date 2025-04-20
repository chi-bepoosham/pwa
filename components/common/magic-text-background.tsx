import TextBackground from "./text-background";

const MagicTextBackground = ({title} : {title : string}) => {
  return (
    <div className="flex items-center gap-1">
      <img src="/static/images/icon/shop/stars.svg" alt="" />
      <TextBackground className="text-sm" bgColor="#0c0d1158">
        {title}
      </TextBackground>
    </div>
  );
};
export default MagicTextBackground;
