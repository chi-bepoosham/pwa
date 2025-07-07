import { MagicStarsIcon } from '@/stories/Icons';
import { StarIcon } from '@/stories/Icons';
import clsx from 'clsx';


interface HeaderProps {
  variant: "centered" | "side";
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  const {
    variant = "centered",
    title,
    subtitle,
    startContent,
    endContent,
  } = props;

  const isCentered = variant === "centered";

  return (
    <header className="p-7 sticky top-0 z-20 bg-white">
      <div className="flex flex-row justify-between items-center">
        {startContent}
        <div className={clsx("flex flex-col gap-2 flex-1", isCentered ? "items-center" : "items-start")}>
          <h1 className={clsx("flex flex-row gap-2 text-nowrap truncate", isCentered ? "" : "font-semibold text-lg")}>
            {!isCentered && (
              <i className='text-primary'>
                <MagicStarsIcon size={20} />
              </i>
            )}
            {isCentered && (
              <i className='text-secondary'>
                <StarIcon size={20} />
              </i>
            )}
            {title}
            {isCentered && (
              <i className='text-secondary'>
                <StarIcon size={20} />
              </i>
            )}
          </h1>
          {subtitle}
        </div>
        {endContent}
      </div>
    </header>
  );
};
export default Header;
