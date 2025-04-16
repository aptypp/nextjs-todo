'use client';

import {useState} from "react"

interface IListItem
{
    name: string;
    isShown: boolean;
    toggleShown: () => void;
}

function Items()
{
    const [shownIndex, setShownIndex] = useState<number | null>(null);

    const items = [
        'hello',
        'john',
        'john',
        'john',
        'john',
        'john',
        'john',
        'john',
        'john',
        'john',
        'john',
        'john',
        'john',
        'john',
        'john',
        'shrek'];

    return items.map((
        x,
        i) => (<Item
        key={i}
        name={x}
        isShown={shownIndex === i}
        toggleShown={() => setShownIndex(shownIndex === i ? null : i)}/>));
}

function Item(item: IListItem)
{
    const [isCompleted, setIsCompleted] = useState(false);

    return (<li
        className={'group flex items-center w-full h-1/10 min-h-1/10 max-h-1/10 bg-primary rounded-xl p-4 gap-1'}
        onClick={item.toggleShown}>
        <div className={'flex justify-center items-center rounded-full border-1 h-1/2 max-h-1/2 aspect-square'} onClick={() => setIsCompleted(!isCompleted)}>
            <div className={`${isCompleted ? 'opacity-100' : 'opacity-0'} bg-on-primary w-1/2 aspect-square rounded-full`}/>
        </div>
        <h1>{item.name}</h1>
        <div
            className={`ml-auto flex gap-1 ${item.isShown ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 group-hover:opacity-100`}>
            <button className={'rounded p-1 regular'}
                    onClick={(e) =>
                    {
                        e.stopPropagation();
                        console.log("clicked");
                    }}>Edit
            </button>
            <button className={'rounded p-1 attention'}
                    onClick={(e) =>
                    {
                        e.stopPropagation();
                        console.log("clicked");
                    }}>Delete
            </button>
        </div>
    </li>)
}

export default function Home()
{
    return (<div className={'h-full'}>
        <ol className={'flex flex-col flex-1 items-center w-full h-full gap-1 pt-1 pb-1 pl-8 pr-8 overflow-auto'}>
            <Items/>
            <button
                className={'font-bold self-start regular rounded aspect-square p-1'}>
                New
            </button>
        </ol>
    </div>);
}
