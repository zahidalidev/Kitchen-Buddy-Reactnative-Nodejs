export default DatesDifference = (lastCheck) => {
    const today = new Date();
    const diffTime = today.getTime() - lastCheck.getTime();
    return Math.ceil(diffTime / (1000 * 3600 * 24));
}