type PropsType = {
  name: string;
};

function MenuCategoryName(props: PropsType) {
  const { name } = props;

  return (
    <div key={name} className='mt-3'>
      <p className='font-oxygen font-bold text-[#000000] text-xl'>
        {name.toUpperCase()}</p>
      <hr className='w-100 border-[#000000]' />
    </div>
  );
}

export default MenuCategoryName;
