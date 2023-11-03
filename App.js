
import React,{useState,useCallback} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View, ActivityIndicator,
  ImageBackground, Alert } from 'react-native';
import axios from 'axios';
import { FAB } from 'react-native-paper';

export default function App() {

  //chapter 2 & 6 assignment

  // const [ input, setInput] = useState('');
  // const [ loading, setLoading] = useState(false);
  // const [ data, setData] = useState([]);

  // const api = {
  //   key: '83e91b04783619b0df74a8c363297e34',
  //   baseUrl: 'https://api.openweathermap.org/data/2.5/',
  // };


  // const fetchDataHandler = useCallback(() => {
  //    setLoading(true);
  //    setInput('');
  //    axios({
  //      method: 'GET',
  //      url: 'https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${API key}',
  //    }).then(res => {
  //      console.log(res.data);
  //      setData(res.data);
  //    })
  //    .catch(e => console.dir(e))
  //    .finally(()=> setLoading(false));
  // }, [api.key, input]);


   {/*  chapter 3, 2 assignment */}
  // const [counter, setCounter] = useState(0);
  
  // const increment = () => {
  //   setCounter(counter + 1);
  // }
  // const decrement = () => {
  //  if (counter > 0 ) {
  //   setCounter(counter - 1);
  //  }else {
  //   Alert.alert("you have reached zero,so you can not dec further")
  //  }
  // }

  {/*  chapter 3, 4 assignment */}

  // const [base1, setBase1] = useState('');
  // const [base2, setBase2] = useState('');
  // const [height, setHeight] = useState('');
  // const [area, setArea] = useState('');


  // const calculateArea = () => {
  //   const b1 = parseFloat(base1);
  //   const b2 = parseFloat(base2);
  //   const h = parseFloat(height);
  //   const result = ((b1 + b2) * h) / 2;
  //   setArea(result.toFixed(2));
  // };

  {/*  chapter 3, 5 assignment */}

  const [radius, setRadius] = useState('');
  const [height, setHeight] = useState('');
  const [volume, setVolume] = useState('');


  const calculateVolume = () => {
    const r = parseFloat(radius);
    const h = parseFloat(height);
    const v = Math.PI * r * h;
    setVolume(v.toFixed(2));
   };



  return (

    <View style={styles.container}>
      {/* chapter 2 & 1 assignment */}
     {/* <Image source={require("./images/alqalamlogo.png")} />
      <Text
         style={styles.alqalamText}
      >
      ALQALAM UNIVERSITY KATSINA, UK DON</Text>
     */}


     {/* chapter 2 & 2 assignment */}
     {/* <View style={styles.seconAssignment}>
     <TextInput style={styles.textInput} placeholder='my best course'/>
     <Button  title='hey uk don'/>
     </View> */}


     {/* chapter 2 & 3 assignment */}
     {/* <View style={styles.thirdAssignment}>
     <TextInput style={styles.textField} placeholder='my favorite course'/>
     <TextInput style={styles.textField} placeholder='my favorite course'/>
     <Button  title='hey uk don'/>
     </View> */}


     {/* chapter 2 & 4 assignment */}
     {/* <View style={styles.fourthAssignment}>
     <Image style={styles.userImage} source={require("./images/alqalamlogo.png")} />
      <View style={styles.userInterface}>
        <Text style={styles.userText}>Username: </Text>
        <TextInput style={styles.textArea} placeholder='Enter your username'/>
      </View >
      <View style={styles.userInterface}>
      <Text style={styles.userText}>password: </Text>
        <TextInput style={styles.textArea} placeholder='Put your password correctly'/>
      </View>
     </View>
      <View style={styles.userButton} >
        <Button  title='cancel'/>
        <Button  title='login'/>
      </View> */}


      {/* chapter 2 & 5 assignment */}
     {/* <View style={styles.fourthAssignment}>
     <Image style={styles.userImage} source={require("./images/alqalamlogo.png")} />

      <View style={styles.userInterface}>
        <Text style={styles.userText}>FullName: </Text>
        <TextInput style={styles.textArea} placeholder='Enter your Name'/>
      </View >

      <View style={styles.userInterface}>
      <Text style={styles.userText}>E Address: </Text>
        <TextInput style={styles.textArea} placeholder='Insert your Email'/>
      </View>

      <View style={styles.userInterface}>
      <Text style={styles.userText}>Phone No: </Text>;;a\x3
        <TextInput style={styles.textArea} placeholder='Your Phone Number'/>
      </View>

      <View style={styles.userInterface}>
      <Text style={styles.userText}>password: </Text>
        <TextInput style={styles.textArea} placeholder='Put your password correctly'/>
      </View>

     </View>
      <View style={styles.userButton} >
        <Button  title='SignIn'/>
        <Button  title='SignUp'/>
      </View> */}


      {/* chapter 2 & 6 assignment */}
      {/* <ImageBackground 
      source={require('./images/thunderstorm-with-lightning-above-the-sea-at-sunset.jpg')}
       resizeMode="cover" style={styles.Image}>

       <View>
         <TextInput placeholder='Enter city Name and Press Return....'
         onChangeText={text => setInput(text)}
         value={input}
         placeholderTextColor={'#000'}
         style={styles.textInput}
         onSubmitEditing={fetchDataHandler}/>
       </View>
       {loading && (<View>
         <ActivityIndicator size={"large"} color="#000 "/>
         </View>)}

         {data && (
         <View style={styles.infoView}>
           <Text style={styles.cityCountryText}>

             {`${data?.name}, ${data?.sys?.country}`}
              KATSINA, NG

           </Text>
           <Text style={styles.dateText}>{new Date ().toLocaleString()}</Text>
           <Text style={styles.tempText}> 3{`${Math.round(
             data?.main?.temp,
             )} °C`}</Text>
             <Text style={styles.tempText}>3 °C</Text>
             <Text style={styles.minMaxText}>{`min ${Math.round(
               data?.main?.temp_min,
               )} °C / max ${Math.round(data?.main?.temp_max)} °C`}</Text>
           </View>
           )}
     </ImageBackground> */}


     {/*  chapter 3, 1 assignment */} 
      {/* <Button title='press me' onPress={() =>
         {console.log("HELLO WELLCOME TO REACT NATIVE")}}></Button> */}


         {/*  chapter 3, 2 assignment */}
         {/* <Text>COUNTER APP!</Text>
         <FAB
             style={styles.fab}
             small icon="minus"
             onPress={decrement}
             />
         <Text>{counter}</Text>
         <FAB
             style={styles.fabri}
             small icon="plus"
             onPress={increment}
             />
          */}
     
          {/*  chapter 3, 4 assignment */}

          {/* <Text style={styles.chpt3A4}>Base 1:</Text>
	      <TextInput
	        style={styles.textinputs}
	        keyboardType="numeric"
	        onChangeText={setBase1}
	        value={base1}
	      />
	      <Text style={styles.chpt3A4}>Base 2:</Text>
	      <TextInput
	        style={styles.textinputs}
	        keyboardType="numeric"
	        onChangeText={setBase2}
	        value={base2}
	      />
	      <Text style={styles.chpt3A4}>Height:</Text>
	      <TextInput
	        style={styles.textinputs}
	        keyboardType="numeric"
	        onChangeText={setHeight}
	        value={height}
	      />
	      <Button title="Calculate" onPress={calculateArea} />
	      {area !== '' && (
	        <Text style={styles.result}>
	          The area of the trapezium is {area} units²
	        </Text>
	      )} */}


        {/*  chapter 3, 5 assignment */}

        <Text style={styles.chpt3A5}>Radius:</Text>
	      <TextInput
	        value={radius}
	        onChangeText={setRadius}
	        keyboardType="numeric"
	        style={styles.textinputs}
	      />
	      <Text style={styles.chpt3A5}>Height:</Text>
	      <TextInput
	        value={height}
	        onChangeText={setHeight}
	        keyboardType="numeric"
	        style={styles.textinputs}
	      />
	      <Button color={'blue'} title="Calculate" onPress={calculateVolume} />
	      <Text style={styles.result}>The area of Volume is: {volume}</Text>


    </View>

    
  

  );
}

const styles = StyleSheet.create({
  container: {
    // 1 assignment & chapter 3, 1 & 2 & 4 & 5

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    // 2 & 3 & 4 assignment
    // paddingTop: 50,
    // paddingHorizontal: 16,
    
    //2 6 assignment
    //flex: 3,

    //chapter 3, 4 & 5
    padding: 30,
    
  },

  // 1 assignment
  alqalamText: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'blue',
  },
  
  //  2 assignment
  seconAssignment: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginTop: 200
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },

  // 3 assignment
  thirdAssignment: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 200,
  },

  textField: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '90%',
    padding: 8,
    marginBottom: 20,
  },

  // 4 & 5 assignment
  fourthAssignment: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 100,
  },

  textArea: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '75%',
    padding: 8,
    marginBottom: 20,
  },

  userInterface: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  userText: {
    fontWeight: '500',
    fontSize: 17,
  },

  userButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  userImage: {
    marginBottom: 30,
  },

  // 6 assignment

  Image: {
    flex: 1,
    flexDirection: 'column',
  },

  textInput: {
    borderBottomWidth: 3,
    padding: 5,
    paddingVertical: 20,
    marginVertical: 100,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    fontSize: 19,
    borderRadius: 16,
    borderBottomColor: "#df8e00",
  },

  infoView: {
    alignItems: "center",

  },

  cityCountryText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },

  dateText: {
    color: "#fff",
    fontSize: 22,
    marginVertical: 10,
  },

  tempText: {
    fontSize: 45,
    color: '#fff',
    marginVertical: 10,
  },

  minMaxText: {
    fontSize: 22,
    color: "#fff",
    marginVertical: 10,
    fontWeight: '500',
  },

// chapter 3, 2 assignment 

fabri: {
    //position: 'absolute',
    marginTop: 16,
  },

  fab: {
    marginBottom: 16,
    marginTop: 10,
  },

 //chapter 3, 4 assignment 

 chpt3A4: {
    fontSize: 25,
    marginVertical: 15,
    color: 'green',
  },
  textinputs: {
    width: '100%',
    height: 70,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'green',
  },

  //chapter 3, 5 assignment 

  textinputs: {
    width: '100%',
    height: 70,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'green',
  },
  
  chpt3A5: {
    fontSize: 25,
    marginVertical: 15,
    color: 'green',
  },

});
