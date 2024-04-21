import React,{useState}  from 'react';
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList} from 'react-native';
import ResultImc from './ResultImc';
import styles from './style'

export default function Form(){

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc,setMessageImc] = useState("Preencha o peso e a altura!");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessageHeight, setErrorMessageHeight] = useState(null);
    const [errorMessageWeight, setErrorMessageWeight] = useState(null);
    const [imcList, setImcList] = useState([]);

    function imcCalculator(){
        let heightFormat = height.replace(",",".")
        let weightFormat = weight.replace(",",".")
        let totalImc =  (weightFormat/(heightFormat*heightFormat)).toFixed(2);
        setImc(totalImc);
        setImcList((arr) => [...arr,{id: new Date().getTime, imc:totalImc}]);
    }

    function validationImc(){

        if(weight!= null && height != null){
            setErrorMessageWeight(null);
            setErrorMessageHeight(null);
            imcCalculator();
            setMessageImc("Seu imc é igual:");
            setTextButton("Calcular novamente");
            setHeight(null);
            setWeight(null);
        } else{

            if(height == null && imc == null){
                Vibration.vibrate();
                setErrorMessageHeight("Campo obrigatório!")
                setHeight(null);
            }
    
            if(weight == null && imc == null){
                Vibration.vibrate();
                setErrorMessageWeight("Campo obrigatório!")
                setWeight(null);
            }

            setImc(null);
            setTextButton("Calcular");
            setMessageImc("Preencha o peso e altura");
        }
    }

    return(
        <View style={styles.formContext}>
            {imc== null ? 
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessageHeight}</Text>
                <TextInput
                style={styles.formInput} 
                onChangeText={setHeight}
                value={height}
                placeholder ="Ex. 1.75" 
                keyboardType="numeric"/>
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessageWeight}</Text>
                <TextInput 
                style={styles.formInput}
                value={weight}
                onChangeText={setWeight}
                placeholder="Ex. 86.55" 
                keyboardType="numeric"/>
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => {
                        validationImc()
                    }}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </Pressable>
            : 
            <View style={styles.exhibitionResultImc}>
                <ResultImc messageResultImc={messageImc} resultImc={imc} />
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => {
                        validationImc()
                    }}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            }
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.listImcs}
                data={imcList.reverse()}
                renderItem={({item}) =>{
                    return(
                        <Text style={styles.resultImcItem}>
                            <Text style={styles.textResultItemList}>
                            Result IMC = 
                            </Text>
                            {item.imc}
                        </Text>
                    ) 
                }}
                keyExtractor={(item) => {item.id}}
            />
        </View>
    )
}