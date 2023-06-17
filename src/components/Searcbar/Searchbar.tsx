import searchLogo from '../../assets/searchLogo.svg';

export default function Searchbar() {
  return <div className="flex items-center h-11 gap-4 py-3 bg-[#F5F5F5] rounded-md px-4 w-full max-w-sm">
    <img src={searchLogo} alt="Search Logo" height={22} width={22} />
    <input type="text" placeholder='Search for anything...' className='flex-grow bg-transparent'/>
  </div>
}