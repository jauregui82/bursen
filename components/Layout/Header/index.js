
const CustonHeader = () => {
  return (
    <>
        <header>
            <img className="image" src="/banner.svg" alt="me"/>
        </header>
        <style jsx>
            {`
                img {
                    flex-grow: 1;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    position: relative;
                    left: 0;
                }
                
            `}
        </style>
    </>
    )
}

export default CustonHeader