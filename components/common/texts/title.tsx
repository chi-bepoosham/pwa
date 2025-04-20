const Title = ({ children }: { children: React.ReactNode }) => {
  return <h2 className='text-foreground text-xl font-bold flex items-center gap-2'>{children}</h2>;
};

export default Title;
