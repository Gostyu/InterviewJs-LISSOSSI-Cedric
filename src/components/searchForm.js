import React,{useState} from 'react'
import countries from "../data/countries"

const  SearchForm = (props) => {
    const [values, setValues] = useState({
        name:'',
        age :0,
        countrySelected:null,
        genderSelected:null,
    });
    function handleFormInput(e){
        console.log(e.target.value);
        const {name,value} = e.target;
        setValues({...values, [name]:value})
       props.formValuesCallback(values);
    }
    // useEffect(() => {
    //     setformValue(formValue)
    // }, [formValue])
    const countryOptionList = countries.map((country,index)=>{
        return <option key={index}value={country.name}>{country.name}</option>
    })
    return (
        <div className="form">
            <h2>Formulaire de recherche</h2>
            <form>
                <label htmlFor="searchByName">Nom</label>
                <input type="text" name="name" value={values.name} onChange={(e)=> handleFormInput(e)}/>
                <label htmlFor="searchByAge">Age</label>
                <input type="number" name="age" value={values.age} onChange={(e)=> handleFormInput(e)}  min="0" max="100" />
                <label htmlFor="select-country">Rechercher par pays</label>
                <select id="select-country" name="countrySelected" onChange={(e)=> handleFormInput(e)}>
                    {countryOptionList}
                </select>               
                <label htmlFor="select-gender">Rechercher par genre</label>
                <select id="select-gender" name="genderSelected" onChange={(e)=> handleFormInput(e)}>
                    <option value="female">Femme</option>
                    <option value="male">Homme</option>
                </select>
            </form>
        </div>
    )
}

export default SearchForm
