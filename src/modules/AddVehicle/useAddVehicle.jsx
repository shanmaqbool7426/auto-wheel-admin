import { useForm } from '@mantine/form';
import { useCreateVehicleMutation } from '@/services/vehicle-manage';

export const useAddVehicle = () => {
  const [createVehicle] = useCreateVehicleMutation()
  const form = useForm({
    initialValues: {
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
    },

    validate: {
      // Add validation rules as needed
      // type: (value) => (!value ? 'Vehicle type is required' : null),
      // make: (value) => (!value ? 'Make is required' : null),
      // model: (value) => (!value ? 'Model is required' : null),
      // ... add more validation rules
    }
  });

    // Function to recursively merge edit data with initial values
    // const mergeWithInitialValues = (initial, edit) => {
    //   if (!edit) return initial;
  
    //   const merged = { ...initial };
      
    //   Object.keys(initial).forEach(key => {
    //     if (edit.hasOwnProperty(key)) {
    //       if (typeof initial[key] === 'object' && !Array.isArray(initial[key]) && initial[key] !== null) {
    //         merged[key] = mergeWithInitialValues(initial[key], edit[key]);
    //       } else {
    //         merged[key] = edit[key];
    //       }
    //     }
    //   });
  
    //   return merged;
    // };
    
  
  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
    createVehicle(values)
      .then((res) => {
        console.log("res", res)
      })
      .catch((err) => {
        console.log("err", err)
      })
  };

  return {
    form,
    handleSubmit: form.onSubmit(handleSubmit)
  };
};