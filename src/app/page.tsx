'use client';

import {InlineSVG} from "@/utils/svg/inlineSVG"
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
        <div className={'flex justify-center items-center rounded-full border-1 w-4 aspect-square'}
             onClick={(e) =>
             {
                 e.stopPropagation()
                 setIsCompleted(!isCompleted)
             }}>
            <div
                className={`${isCompleted ? 'opacity-100' : 'opacity-0'}`}>
                <InlineSVG src={'/icons/check_icon.svg'}
                           className={'flex justify-center items-center relative'}
                           svgClassName={'fill-on-primary w-full aspect-square'}>
                </InlineSVG>
            </div>
        </div>
        <h1>{item.name}</h1>
        <div
            className={`ml-auto flex gap-1 ${item.isShown ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 group-hover:opacity-100`}>
            <button className={'w-8 aspect-square rounded-md bg-tertiary'}
                    onClick={(e) =>
                    {
                        e.stopPropagation();
                        console.log("clicked");
                    }}>
                <InlineSVG src={'/icons/edit_icon.svg'}
                           className={'flex justify-center items-center relative'}
                           svgClassName={'fill-on-tertiary w-4'}>
                </InlineSVG>
            </button>
            <button className={'w-8 aspect-square rounded-md bg-danger'}
                    onClick={(e) =>
                    {
                        e.stopPropagation();
                        console.log("clicked");
                    }}>
                <InlineSVG src={'/icons/trash_icon.svg'}
                           className={'flex justify-center items-center relative'}
                           svgClassName={'fill-on-danger w-4'}>
                </InlineSVG>
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
                className={'self-start bg-tertiary rounded-md p-2'}>
                <InlineSVG src={'/icons/plus_icon.svg'}
                           className={'flex justify-center items-center relative'}
                           svgClassName={'fill-on-tertiary w-6'}>
                </InlineSVG>
            </button>
        </ol>
    </div>);
}
