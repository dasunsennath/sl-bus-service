
import {createContext,useState} from "react";

export const FormContext = createContext();

export const ContexProvider = ({children}) => {

    const [Location, setLocation] = useState(null);
    const [Sex, setSex] = useState({
        male:false,
        female:false,
        other:false
    });
    
    const [Age,setAge] = useState(18);
    const [hadsex,setHadsex] = useState();
    const [Sexualpartners,setSexualpartners] = useState(1);
    const [sextype,setsextype] = useState(
        {
            male:true,
            female:false,
            trans:false,
            other:false
        }
    );
    const [Symptoms,setSymptoms] = useState({
        fever :true,
        chills: false,
        Lymphadenopathy: false,
    });
    const[History_of_HIV,setHistory_of_HIV] = useState();
    const[Pre_Exposure_Prophylaxis,setPre_Exposure_Prophylaxis] = useState();
    const[cropIMG,setCropIMG] = useState();
    const[result,SetResult] = useState(null);
    const[validateP1,setValidateP1] = useState(false);
    const[validateP2,setValidateP2] = useState(false);
    const[validateP3,setValidateP3] = useState(false);
    const[isLoading,setIsLoading] = useState(false);
    const[Recenttravel,setRecenttravel] = useState();
    const[closecontact,setClosecontact] = useState();

    return (
        <FormContext.Provider
        value={{
            Location,
            Sex,
            Age,
            hadsex,
            Sexualpartners,
            sextype,
            Symptoms,
            History_of_HIV,
            Pre_Exposure_Prophylaxis,
            cropIMG,
            validateP1,
            validateP2,
            validateP3,
            result,
            isLoading,
            Recenttravel,
            closecontact,
            setSex,
            setLocation,
            setAge,
            setHadsex,
            setSexualpartners,
            setsextype,
            setSymptoms,
            setHistory_of_HIV,
            setPre_Exposure_Prophylaxis,
            setCropIMG,
            setValidateP1,
            setValidateP2,
            setValidateP3,
            SetResult,
            setIsLoading,
            setRecenttravel,
            setClosecontact
            
        }}
        >
       {children}
        </FormContext.Provider>

    )

}