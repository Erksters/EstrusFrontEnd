import React from 'react';
import { Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import CowOrHeiferData from "./CowOrHeifer.json"
import BreedTypeData from "./BreedType.json"
import SystemTypeData from "./SystemType.json"
import SemenTypeData from "./SemenType.json"
import GNRHData from "./GNRH.json"
import PGData from "./PG.json"
import {
    MuiPickersUtilsProvider,
    KeyboardDateTimePicker,
  } from '@material-ui/pickers';
  import DateFnsUtils from '@date-io/date-fns';
import "./Homepage.css"
import swal from 'sweetalert';

const InitialData = props => {
    const {
        UserFlow, setUserFlow, BreedType,
        setBreedType, SemenType, setSemenType,
        CowOrHeifer, setCowOrHeifer,
        SystemType , setSystemType, DateToStartBreeding,
        setDateToStartBreeding, GNRH , setGNRH, PG,
        setPG, BullTurnIn , setBullTurnIn,
        GestationPeriod , setGestationPeriod
    } = props;

    const CheckDataAndSubmit = () =>
    {
        if(
            BreedType   === undefined ||
            CowOrHeifer === undefined ||
            SemenType   === undefined ||
            SystemType  === undefined ||
            DateToStartBreeding  === undefined ||
            GNRH        === undefined ||
            PG          === undefined ||
            BullTurnIn  === undefined ||
            GestationPeriod  === undefined
        ){
            swal( "Enter more info",{
                icon: "error",
              });
        }
        else{
            setUserFlow(UserFlow + 1)
        }
    }
    return (
        <div>
            <h1>Welcome to the Estrus Synchronization Planner</h1>
            <h2>Enter Details Below to Get Started</h2>
            
            {/* Select Cow or Heifer */}
            <FormControl variant = "outlined" >
                <InputLabel>Cow or Heifer</InputLabel>
                <Select 
                    className="InputStyle"
                    value    = { CowOrHeifer || undefined  } 
                    onChange ={ ( event ) => {setCowOrHeifer(event.target.value)}} 
                >
                    {Object.keys(CowOrHeiferData).map( (jsonKey, index) => {
                        return <option key={index} value={CowOrHeiferData[jsonKey]} >{jsonKey}</option>      
                    })}
                    
                </Select>
            </FormControl>
            <br />
            <br />

            {/* Select Cow or Heifer */}
            <FormControl variant = "outlined" >
                <InputLabel>Semen Type</InputLabel>
                <Select 
                    className="InputStyle"
                    value    = { SemenType || undefined  } 
                    onChange ={ ( event ) => {setSemenType(event.target.value)}} 
                >
                    {Object.keys(SemenTypeData).map( (jsonKey, index) => {
                        return <option key={index} value={SemenTypeData[jsonKey]} >{jsonKey}</option>      
                    })}
                    
                </Select>
            </FormControl>
            <br />
            <br />

            {/* Select Species */}
            <FormControl variant = "outlined" >
                <InputLabel>Breed Type</InputLabel>
                <Select 
                    className="InputStyle"
                    value    = { BreedType || undefined  } 
                    onChange ={ ( event ) => {setBreedType(event.target.value)}} 
                >
                    {Object.keys(BreedTypeData).map( (jsonKey, index) => {
                        return <option key={index} value={BreedTypeData[jsonKey]} >{jsonKey}</option>      
                    })}
                    
                </Select>
            </FormControl>
            <br />
            <br />

            {/* Select System Type */}
            <FormControl variant = "outlined" >
                <InputLabel>System Type</InputLabel>
                <Select 
                    className="InputStyle"
                    value    = { SystemType || undefined  } 
                    onChange ={ ( event ) => {setSystemType(event.target.value)}} 
                >
                    {Object.keys(SystemTypeData).map( (jsonKey, index) => {
                        return <option key={index} value={SystemTypeData[jsonKey]} >{jsonKey}</option>      
                    })}
                    
                </Select>
            </FormControl>
            <br />
            <br />

            {/* Select GNRH Type */}
            <FormControl variant = "outlined" >
                <InputLabel>GNRH</InputLabel>
                <Select 
                    className="InputStyle"
                    value    = { GNRH || undefined  } 
                    onChange ={ ( event ) => {setGNRH(event.target.value)}} 
                >
                    {Object.keys(GNRHData).map( (jsonKey, index) => {
                        return <option key={index} value={GNRHData[jsonKey]} >{jsonKey}</option>      
                    })}
                </Select>
            </FormControl>
            <br />
            <br />

            {/* Select GNRH Type */}
            <FormControl variant = "outlined" >
                <InputLabel>PG</InputLabel>
                <Select 
                    className="InputStyle"
                    value    = { PG || undefined  } 
                    onChange ={ ( event ) => {setPG(event.target.value)}} 
                >
                    {Object.keys(PGData).map( (jsonKey, index) => {
                        return <option key={index} value={PGData[jsonKey]} >{jsonKey}</option>      
                    })}
                </Select>
            </FormControl>
            <br />
            <br />

            {/* Set Gestation Period */}
            <FormControl variant = "outlined">
                <InputLabel>Gestation Period</InputLabel>
                <input 
                type="number"
                style={{textAlign:'center'}}
                    className="InputStyle"
                    value    = { GestationPeriod || undefined  } 
                    onChange ={ ( event ) => {setGestationPeriod(event.target.value)}} 
                />
                </FormControl>
            <br />
            <br />

            {/* Set Bull Turn In */}
            <FormControl variant = "outlined">
                <InputLabel>Bull Turn In</InputLabel>
                <input 
                type="number"
                style={{textAlign:'center'}}
                    className="InputStyle"
                    value    = { BullTurnIn || undefined  } 
                    onChange ={ ( event ) => {setBullTurnIn(event.target.value)}} 
                />
                </FormControl>
            <br />
            <br />

            {/* Set Date and Time to start Breeding */}
            <MuiPickersUtilsProvider utils = { DateFnsUtils } >
                <KeyboardDateTimePicker
                    variant     = "dialogue"
                    label       = "Select Intended Start Date"
                    value       = { DateToStartBreeding }
                    onChange    = { ( value )=> setDateToStartBreeding( new Date(value) ) }
                    format      = "MM/dd/yyyy hh:mm aa"
                />
            </MuiPickersUtilsProvider>
            <br />
            <br />
         
            <Button 
                onClick = {() => {CheckDataAndSubmit()}}
                variant   = "contained" 
                size      = "large"
            >
            Submit
            </Button>
        </div>
    );
} /* end InitialData */
export default InitialData;