export default DatesDifference = (lastCheck) => {
    const today = new Date();
    const diffTime = today.getTime() - lastCheck.getTime();
    return Math.floor(diffTime / (1000 * 3600 * 24));
}