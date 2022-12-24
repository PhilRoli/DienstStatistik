function Zugselector({ text, hideMobile }) {
    return (
        <div className={`quickButton ${hideMobile && 'hideMobile'} wideButton`}>
            <button>{text}</button>
        </div>
    );
}

export default Zugselector;
