import React, { useState } from 'react';
import dogImage from './assets/Dog1.jpeg';
import dog3 from './assets/dog-paw.jpeg';

// creating the component and making it type Reac.FC
const DogConverter: React.FC = () => {
    // setting use state to number and string
    const [age, setAge] = useState<number | string>("");
    // set use state to string and null 
    const [dogage, setDogAge] = useState<string | null>(null);
    // When someone types a number into the input div all of the work 
    // is handled in this function and returns a value 
    const handleAgeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.valueAsNumber;
        setAge(isNaN(value) ? "" : value);
    }
    // When Someone clicks on enter it will go here and handle the work below 
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        // prevent default so that the setDogAge or the final result is not reset automatically and stays on the page 
        event.preventDefault();
        const ageNumber = Number(age);
        if (!isNaN(ageNumber) && ageNumber > 0) {
            // secret sauce formula rite here to convert human age to dog age
            const dogAgeCalculation = 16 * Math.log(ageNumber) + 31;
            setDogAge(dogAgeCalculation.toFixed(2));
        } else {
            // if its not satisfied display nothing 
            setDogAge(null);
        }
    }

    return (
        <form>
            <div className="instructions">
                {/* <div className="dogImageOne">Dogs</div> */}
                {/* <img src={dog2} alt='dog' /> */}
                <img src={dogImage} alt="Dog" className="brownDog" />
                <div className="info">Insert the Age of a human and below it will do the math to output the age in dog years</div>
            </div>
            <div className="ageArea">
                <label htmlFor="age">Enter Age: </label>
                <input
                    id="age"
                    type="number"
                    value={age}
                    // when someone types something it gets sent to the function in the curly braces
                    onChange={handleAgeInput}
                    placeholder="0" />
            </div>
            <div className="enter">
                <button
                    // when someone clicks the enter button its basically the event listener for handleclick below 
                    onClick={handleClick}
                    type="submit"
                    className="submit"
                    title='button'
                > Enter </button>
            </div>
            <div className='displayArea'>
                {dogage !== null && (
                    <div className="result">
                        <img src={dog3} alt='dog3'></img>
                        <div className='direct-info' >A {age} year-old human is approximately {dogage} years old in dog years.</div>
                    </div>
                )}
            </div>
        </form>
    );
}

export default DogConverter;
