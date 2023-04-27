import "./cat-icon.css";

export default function CatIcon({ feature }) {
  return (
    <>
    {feature && feature === 'empty' ? '' : (<p className='cat-icon'>{feature}</p>)}
    </>
  );
}
