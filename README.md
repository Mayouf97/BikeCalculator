# BikeCalculator
bike calculate for the average speed depending on the cyclist age

1#User input:
- age.
- total weight (bike + rider).

2#All unite should be in metricl for calculation.

3#Calculate Fgravity: </br>
Fg = 9.8067*sin(arctan(G/100))*W
- G: Griedient.
- W: Weight in kilograms.

4#Calculate Frolling:</br>
Fr = 9.8067*cos(arctan(G/100))*WxCrr
- Crr: rolling resistance constant

5#Calculate V(m/s) using Wattag.</br>
W = ((Fg+Fd) + 0.2V^2))*V

6# Convert Speed V(m/s) to MPH or KMH </br>
KMH = (V * 3600) / 1000
MPH = (V * 3600) / 1609.34
