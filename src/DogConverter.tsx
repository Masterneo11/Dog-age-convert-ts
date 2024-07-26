import React, { useState } from 'react';
import dogImage from './assets/Dog1.jpeg';
import dog3 from './assets/dog-paw.jpeg';

const DogConverter: React.FC = () => {
    const [age, setAge] = useState<number | string>("");
    const [dogage, setDogAge] = useState<string | null>(null);

    const handleAgeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.valueAsNumber;
        setAge(isNaN(value) ? "" : value);
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault();
        const ageNumber = Number(age);

        if (!isNaN(ageNumber) && ageNumber > 0) {
            const dogAgeCalculation = 16 * Math.log(ageNumber) + 31;
            setDogAge(dogAgeCalculation.toFixed(2));
        } else {
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
                    onChange={handleAgeInput}
                    placeholder="0" />
            </div>
            <div className="enter">
                <button
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
                {/* <img src={dog3} alt='dog3'></img> */}
            </div>
        </form>
    );
}

export default DogConverter;
