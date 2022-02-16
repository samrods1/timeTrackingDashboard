const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

function changeDailyTime(){
    document.getElementById("workHour").innerHTML = "5hrs";
    document.getElementById("playHour").innerHTML = "1hr";
    document.getElementById("studyHour").innerHTML = "0hrs";
    document.getElementById("exerciseHour").innerHTML = "1hr";
    document.getElementById("socialHour").innerHTML = "1hr";
    document.getElementById("careHour").innerHTML = "2hrs";

    document.getElementById("lastWorkWeek").innerHTML = "Previous - 7hrs";
    document.getElementById("lastPlayWeek").innerHTML = "Previous - 2hr";
    document.getElementById("lastStudyWeek").innerHTML = "Previous - 2hrs";
    document.getElementById("lastExerciseWeek").innerHTML = "Previous - 1hr";
    document.getElementById("lastSocialWeek").innerHTML = "Previous - 3hr";
    document.getElementById("lastCareWeek").innerHTML = "Previous - 1hr";
}

function changeWeeklyTime(){
    document.getElementById("workHour").innerHTML = "32hrs";
    document.getElementById("playHour").innerHTML = "10hrs";
    document.getElementById("studyHour").innerHTML = "4hrs";
    document.getElementById("exerciseHour").innerHTML = "4hrs";
    document.getElementById("socialHour").innerHTML = "5hrs";
    document.getElementById("careHour").innerHTML = "2hrs";

    document.getElementById("lastWorkWeek").innerHTML = " Last week - 7hrs";
    document.getElementById("lastPlayWeek").innerHTML = " Last week - 8hrs";
    document.getElementById("lastStudyWeek").innerHTML = " Last week - 7hrs";
    document.getElementById("lastExerciseWeek").innerHTML = " Last week - 5hrs";
    document.getElementById("lastSocialWeek").innerHTML = " Last week - 10hrs";
    document.getElementById("lastCareWeek").innerHTML = " Last week - 2hrs";
}

function changeMonthlyTime(){
    document.getElementById("workHour").innerHTML = "103hrs";
    document.getElementById("playHour").innerHTML = "23hrs";
    document.getElementById("studyHour").innerHTML = "13hrs";
    document.getElementById("exerciseHour").innerHTML = "11hrs";
    document.getElementById("socialHour").innerHTML = "21hrs";
    document.getElementById("careHour").innerHTML = "11hrs";

    document.getElementById("lastWorkWeek").innerHTML = " Last month -128hrs";
    document.getElementById("lastPlayWeek").innerHTML = " Last month -29hrs";
    document.getElementById("lastStudyWeek").innerHTML = " Last month -19hrs";
    document.getElementById("lastExerciseWeek").innerHTML = " Last month -18hrs";
    document.getElementById("lastSocialWeek").innerHTML = " Last month -23hrs";
    document.getElementById("lastCareWeek").innerHTML = " Last month -11hrs";
}

//get the links
//setting events to the links
daily.addEventListener("click", changeDailyTime);
weekly.addEventListener("click", changeWeeklyTime);
monthly.addEventListener("click", changeMonthlyTime);

