import { useForm } from '@mantine/form';
import { useUpdateVehicleMutation, useCreateVehicleMutation } from '@/services/vehicle-manage';
import { useEffect } from 'react';

export const useAddVehicle = (editData) => {
  const [createVehicle] = useCreateVehicleMutation()
  const [updateVehicle] = useUpdateVehicleMutation();
  let initialFormState =  {
    // Basic Information
    type: '',
    make: '',
    model: '',
    variant: '',
    year: new Date().getFullYear(),
    bodyType: '',

    // General Info
    minPrice: '',
    maxPrice: '',
    colors: [],
    releaseDate: new Date(),
    description: '',
    defaultImage: null,
    images: [],
    views: 0,
    pros: [],
    cons: [],
    faqs: [],

    // Bike Specs
    bikeSpecs: {
      engine: {
        type: '',
        displacement: '',
        horsepower: '',
        torque: '',
        boreStroke: '',
        compressionRatio: '',
        clutch: ''
      },
      transmission: '',
      fuelCapacity: '',
      fuelAverage: '',
      starting: '',
      topSpeed: '',
      dimensions: {
        length: '',
        width: '',
        height: ''
      },
      dryWeight: '',
      frame: '',
      groundClearance: '',
      wheelSize: '',
      tyres: {
        front: '',
        back: ''
      },
      colorsAvailable: [],
      suspension: '' // Add this field
    },

    // Car Specs
    carSpecs: {
      dimensions: {
        overallLength: '',
        overallWidth: '',
        overallHeight: '',
        wheelBase: '',
        groundClearance: '',
        kerbWeight: '',
        bootSpace: '',
        seatingCapacity: '',
        doors: ''
      },
      mileage: {
        city: '',
        highway: ''
      },
      engine: {
        type: '',
        displacement: '',
        horsepower: '',
        torque: '',
        maxSpeed: '',
        cylinderConfiguration: '',
        compressionRatio: '',
        valvesPerCylinder: '',
        valveMechanism: '',
        batteryType: '',
        batteryCapacity: '',
        chargingTime: '',
        range: ''
      },
      transmission: {
        type: 'Automatic',
        cvt: false
      },
      suspensionSteeringBrakes: {
        steeringType: '',
        powerAssisted: '',
        minimumTurningRadius: '',
        frontBrakes: '',
        rearBrakes: ''
      },
      wheelsAndTyres: {
        wheelType: '',
        wheelSize: '',
        tyreSize: '',
        spareTyre: '',
        spareTyreSize: ''
      },
      fuelConsumption: {
        mileageCity: '',
        mileageHighway: '',
        tankCapacity: ''
      },
      safety: {
        airbags: 0,
        seatBelts: 0,
        immobilizer: false,
        childLock: false,
        abs: false,
        tractionControl: false,
        vehicleStabilityControl: false,
        hillAssist: false,
        downHillAssist: false,
        isofixAnchors: false
      },
      exterior: {
        alloyWheels: false,
        coloredOutsideDoorHandles: false,
        sideMirrorsWithIndicators: false,
        rearSpoiler: false,
        adjustableHeadlights: false,
        fogLights: false,
        sunRoof: false,
        moonRoof: false,
        colorsAvailable: []
      },
      entertainment: {
        tachometer: false,
        multiInfo: false,
        cdDvdPlayer: false,
        usbAndAux: false,
        displaySize: '',
        frontSpeakers: false,
        rearSeatEntertainment: false
      },
      comfort: {
        ac: false,
        climateControl: false,
        rearAcVents: false,
        heater: false,
        heatedSeats: false,
        defogger: false,
        coolBox: false,
        navigation: false,
        frontCamera: false,
        rearCamera: false,
        rearFoldingSeat: false,
        rearHeadrest: false,
        rearWiper: false,
        seatMaterialType: '',
        steeringAdjustment: false,
        steeringSwitches: false,
        cruiseControl: false,
        drivingModes: false,
        keyType: 'Smart entry',
        keylessEntry: false,
        pushStart: false,
        centralLocking: false,
        powerDoorLocks: false,
        powerSteering: false,
        powerWindows: false,
        powerMirrors: false,
        cupHolders: false,
        armRest: false,
        handbrake: 'Center Lever',
        interiorLighting: false,
        frontPowerOutlet: false
      },
      brochureLink: 'https://example.com/brochure.pdf'
    },

    // Truck Specs (Similar to Car Specs with relevant modifications)
     
    truckSpecs: {
      dimensions: {
        overallLength: '',      // e.g., "8.5 meters"
        overallWidth: '',       // e.g., "2.5 meters"
        overallHeight: '',      // e.g., "3.8 meters"
        wheelBase: '',          // e.g., "4.2 meters"
        groundClearance: '',    // e.g., "30 cm"
        kerbWeight: '',         // e.g., "6500 kg"
      },
      
      engine: {
        type: '',              // Diesel/Petrol/CNG
        displacement: '',       // e.g., 5000 (cc)
        horsepower: '',        // e.g., "400 HP @ 2100 RPM"
        torque: '',            // e.g., "1850 Nm @ 1200 RPM"
      },

      transmission: {
        type: 'Manual',        // Manual/Automatic/AMT
        powerTakeOff: false,   // Yes/No
      },

      cargo: {
        loadCapacity: '',      // e.g., "25,000 kg"
        cargoLength: '',       // e.g., "6.2 meters"
        cargoWidth: '',        // e.g., "2.4 meters"
        cargoHeight: '',       // e.g., "2.4 meters"
        cargoType: []          // e.g., ["Container", "Flatbed", "Tanker"]
      },

      axleConfiguration: {
        numberOfAxles: 2,      // e.g., 2, 3, or 4
        wheelConfiguration: '', // e.g., "6x4", "4x2"
        maxAxleLoad: ''        // e.g., "7,100 kg"
      },

      chassis: {
        frameType: '',         // e.g., "Ladder Frame"
        suspensionType: {
          front: '',           // e.g., "Parabolic Leaf Springs"
          rear: ''            // e.g., "Air Suspension"
        },
        airBrakeSystem: false  // Yes/No
      },

      cabin: {
        type: '',             // Day Cab/Sleeper Cab
        sleepingBerths: 0     // e.g., 1 or 2
      },

      fuel: {
        tankCapacity: '',     // e.g., 400 (liters)
        adBlueCapacity: ''    // e.g., 75 (liters)
      },

      safety: {
        abs: false,           // Yes/No
        hillAssist: false,    // Yes/No
        trailerStabilityControl: false  // Yes/No
      },

      warranty: {
        vehicle: '',          // e.g., "2 years/200,000 km"
        engine: ''           // e.g., "3 years/300,000 km"
      },

      certification: {
        emissionStandard: ''  // e.g., "Euro 6"
      }
    }
  }
  const form = useForm({
    
    initialValues: initialFormState,
    validate: {
      // Add validation rules as needed
      // type: (value) => (!value ? 'Vehicle type is required' : null),
      // make: (value) => (!value ? 'Make is required' : null),
      // model: (value) => (!value ? 'Model is required' : null),
      // ... add more validation rules
    }
  });

    // Function to recursively merge edit data with initial values
    const deepMerge = (initial, edit) => {
      // If edit is null/undefined, return initial
      if (!edit) return initial;
      
      // If edit is not an object (including arrays), return edit value
      if (typeof edit !== 'object') return edit;
      
      // If edit is an array, return the edit array
      if (Array.isArray(edit)) return [...edit];
      
      // Create a new object to store merged values
      const merged = { ...initial };
      
      // Iterate through all keys in both initial and edit objects
      const allKeys = new Set([...Object.keys(initial), ...Object.keys(edit)]);
      
      allKeys.forEach(key => {
        // If key doesn't exist in edit, keep initial value
        if (!(key in edit)) {
          merged[key] = initial[key];
          return;
        }
        
        // If key doesn't exist in initial but exists in edit, use edit value
        if (!(key in initial)) {
          merged[key] = edit[key];
          return;
        }
        
        // If both values are objects (not arrays), recursively merge
        if (
          typeof initial[key] === 'object' && 
          typeof edit[key] === 'object' &&
          initial[key] !== null &&
          edit[key] !== null &&
          !Array.isArray(initial[key]) &&
          !Array.isArray(edit[key])
        ) {
          merged[key] = deepMerge(initial[key], edit[key]);
        } else {
          // For all other cases (including arrays), use the edit value
          merged[key] = edit[key];
        }
      });
      
      return merged;
    };

    useEffect(() => {
      if (editData) {
        console.log('Prefilling form with:', editData);
        
        // Merge edit data with initial values
        const mergedValues = deepMerge(initialFormState, editData?.data);
          
        // Set form values
        form.setValues(mergedValues);
      }
    }, [editData]);
    console.log("mergedValues>>>>>>>>>", form.getValues())
  
    const handleSubmit = async (values) => {
      try {
        if (editData) {
          await updateVehicle({
            id: editData._id,
            data: values
          }).unwrap();
        } else {
          await createVehicle(values).unwrap();
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  return {
    form,
    handleSubmit: form.onSubmit(handleSubmit),
    
    editData
  };
};