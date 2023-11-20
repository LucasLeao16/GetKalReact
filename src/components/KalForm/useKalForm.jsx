import { useState } from "react";
export default function useKalForm() {
  const [gender, setGender] = useState("M");
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [activityLevel, setActivityLevel] = useState(1.2);
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUser] = useState({
    basal: 0,
    manutency: 0,
    weightLoss: 0,
    weightGain: 0,
  });

  function handleGenderChange(event) {
    setGender(event.target.value);
  }
  function handleAgeChange(event) {
    setAge(event.target.value);
  }
  function handleWeightChange(event) {
    setWeight(event.target.value);
  }
  function handleHeightChange(event) {
    setHeight(event.target.value);
  }
  function handleActivityLevelChange(event) {
    setActivityLevel(event.target.value);
  }
  function handleCalculo() {
    const basal =
      gender === "F"
        ? 655 + 9.6 * weight + 1.8 * height - 4.7 * age
        : 66 + 13.7 * weight + 5 * height - 6.8 * age;
    const manutency = Math.round(basal * activityLevel);
    const weightLoss = manutency - 450;
    const weightGain = manutency + 450;
    setUser({ basal, manutency, weightLoss, weightGain });
  }
  function handleSubmit(event) {
    event.preventDefault();
    handleCalculo();
    setIsSubmit(true);
  }
  return {
    handleGenderChange,
    handleAgeChange,
    handleWeightChange,
    handleHeightChange,
    handleActivityLevelChange,
    handleSubmit,
    isSubmit,
    user,
  };
}
