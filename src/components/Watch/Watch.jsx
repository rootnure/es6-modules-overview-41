const Watch = ({watch}) => {
    const {name, price} = watch;
    return (
        <div>
            <h3>Watch: {name}</h3>
            <p>Price: ${price}</p>
        </div>
    );
};

export default Watch;