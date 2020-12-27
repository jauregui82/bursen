
const CustonBanner = () => {
  return (
    <>
        <img className="image" src="/banner.svg" alt="me"/>
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

export default CustonBanner