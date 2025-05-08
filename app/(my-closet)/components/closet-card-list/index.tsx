import { Brand } from '@/stories/Brand';
import { ClosetCard, ClosetCardProps } from '@/stories/ClosetCard/ClosetCard';


interface ClosetCardList {
  title?: string;
  secondTitle: string;
  listItems: ClosetCardProps[];
  link?: string;
}





const ClosetCardList = ({ title, secondTitle, listItems ,link}: ClosetCardList) => {
  return (
    <section className='w-full'>
      <Brand titleEn={title || ""} titleFa={secondTitle} />
      <div className='grid grid-cols-2 gap-4 mt-5'>
        {listItems.map((item, index) => (
          <ClosetCard
            key={`${item.imageUrl}-${index}`}
            variant={item.variant}
            imageUrl={item.imageUrl}
            matchPercentage={item.matchPercentage}
            onClick={item.onClick}
            
            link={link}
          />
        ))}
      </div>
    </section>
  );
};
export default ClosetCardList;
