import './Sunglass.css';
import Watch from '../Watch/Watch';
import { add, divideTheFirstNumberWithTheSecondNumber as divide, multiply } from '../../Utils/calculate';
// import add from '../../Utils/calculate';

const Sunglass = () => {
    const num1 = 5;
    const num2 = 10;
    // const result = add(num1, num2);
    const result2 = add(num1, num2);
    const product = multiply(num1, num2);
    const div = divide(num1, num2);
    return (
        <div>
            {/* <Watch result={result}></Watch> */}
            <Watch result={result2} product={product} div={div}></Watch>
        </div>
    );
};

export default Sunglass;