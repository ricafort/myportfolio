import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height = ''
    weight = ''

    inputHandler(event){
        
        const{name, value} = event.target
        if(name === "height"){
            this.height = value
        }
        if(name === "weight"){
            this.weight = value
        }
        
        /** */
        /*this[name] = value*/
    }

    submitHandler(event){
        event.preventDefault()
        console.log("height", this.height)
        console.log("weight", this.weight)
        this.calculate()
       
    }


    calculate(){
        //BMI = weight in KG / (height in m * height in cm)
        let height = Number(this.height)/100;
        let bmi = Number(this.weight) / (height * height);
        console.log("BMI value is", bmi)
    }
}