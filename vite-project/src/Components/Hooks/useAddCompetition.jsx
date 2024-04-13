import { useState } from "react";

function useAddCompetition() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [fees, setFees] = useState("");
  const [coordinators, setCoordinators] = useState({});
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [prize, setPrize] = useState({});
  const [time, setTime] = useState("");
  const [message, setMessage] = useState({});

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleImageUrl = (event) => {
    setImageUrl(event.target.value);
  };

  const handleDetails = (event) => {
    setDetails(event.target.value);
  };

  const handleFees = (event) => {
    setFees(event.target.value);
  };

  const handleStartDate = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDate = (event) => {
    setEndDate(event.target.value);
  };

  const handleFirstPrize = (event) => {
    setPrize((prevPrize) => ({
      ...prevPrize,
      firstPrize: event.target.value,
    }));
  };

  const handleSecondPrize = (event) => {
    setPrize((prevPrize) => ({
      ...prevPrize,
      secondPrize: event.target.value,
    }));
  };

  const handleThirdPrize = (event) => {
    setPrize((prevPrize) => ({
      ...prevPrize,
      thirdPrize: event.target.value,
    }));
  };

  const handleFirstCoordinator = (event) => {
    setCoordinators((prevCoordinators) => ({
      ...prevCoordinators,
      coordinator1: event.target.value,
    }));
  };

  const handleSecondCoordinator = (event) => {
    setCoordinators((prevCoordinators) => ({
      ...prevCoordinators,
      coordinator2: event.target.value,
    }));
  };

  const handleThirdCoordinator = (event) => {
    setCoordinators((prevCoordinators) => ({
      ...prevCoordinators,
      coordinator3: event.target.value,
    }));
  };

  const handleCoordinatorContact = (event) => {
    setCoordinators((prevCoordinators) => ({
      ...prevCoordinators,
      contactNum: event.target.value,
    }));
  };

  const handleTime = (event) => {
    setTime(event.target.value);
  };

  const add = async () => {
    console.log("ADDING THE COMPETITION, PLEASE WAIT");
    const payload = {
      name,
      imageUrl,
      description:details,
      startDate,
      endDate,
      time,
      fees,
      coordinators:{
        coordinator1:coordinators.coordinator1,
        coordinator2:coordinators.coordinator2,
        coordinator3:coordinators.coordinator3,
        contactNum:coordinators.contactNum
      },
      prize : {
        firstPlace:prize.firstPrize,
        secondPlace:prize.secondPrize,
        thirdPlace:prize.thirdPrize
      },
    };

    try {
      const resp = await fetch("http://localhost:8081/addComp", {
        method: "POST",
        credentials:"include",
        redirect: "follow",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const respMessage = await resp.json();
      setMessage(respMessage);
      console.log(respMessage);
    } catch (error) {
      console.error("Error during Adding Competition:", error);
    }
  };

  return [
    handleName,
    handleImageUrl,
    handleDetails,
    handleFees,
    handleStartDate,
    handleEndDate,
    handleFirstPrize,
    handleSecondPrize,
    handleThirdPrize,
    handleFirstCoordinator,
    handleSecondCoordinator,
    handleThirdCoordinator,
    handleCoordinatorContact,
    handleTime,
    add,
    message
  ];
}

export default useAddCompetition;
