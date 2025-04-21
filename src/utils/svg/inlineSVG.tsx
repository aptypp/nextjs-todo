import {ReactSVG} from "react-svg"

interface IInlineSVG
{
    src: string;
    className: string
    svgClassName: string
}

export function InlineSVG(args: IInlineSVG)
{
    return (<ReactSVG src={args.src} className={args.className} beforeInjection={e =>
    {
        const classes = args.svgClassName.split(' ')
        classes.forEach(x => e.classList.add(x))
    }}></ReactSVG>);
}