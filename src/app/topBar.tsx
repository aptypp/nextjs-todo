export default function TopBar()
{
    return (<div className={'flex items-center h-full pl-4 gap-2'}>
        <h1 className={'text-xl font-black text-brand stroke-1 stroke-amber-200'}>Tasks</h1>
        <div className={'bg-primary p-2'}> <h1 className={'text-on-primary'}>Primary</h1>  </div>
        <div className={'bg-secondary p-2'}> <h1 className={'text-on-secondary'}>Secondary</h1>  </div>
        <div className={'bg-tertiary p-2'}> <h1 className={'text-on-tertiary'}>Tertiary</h1>  </div>
    </div>)
}