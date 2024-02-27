type CategoryButtonProps = {
  children?: React.ReactNode;
  selected?: boolean;
};
export default function CategoryButton(props: CategoryButtonProps) {
  const curStyle = (() => {
    if (props.selected) {
      return "text-primary";
    } else {
      return "text-[#E0E0E0] cursor-pointer hover:text-primary";
    }
  })();

  return (
    <div className={`relative items-center w-full ${curStyle}`}>
      <p className="text-[18px] sm:text-lg font-bold text-center whitespace-nowrap leading-[21.6px]">
        {props.children}
      </p>
      {props.selected && (
        <div className="relative mt-2">
          <div className="border-t-[5px] border-primary"></div>
        </div>
      )}
    </div>
  );
}
