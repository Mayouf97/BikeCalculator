# BikeCalculator
bike calculate for the average speed depending on the cyclist age

1#User input:
- age.
- total weight (bike + rider).

2#All unite should be in metricl for calculation.


3# Calculate FTP power (W) using age.

4#Calculate Fgravity: </br>
Fg = 9.8067*sin(arctan(G/100))*W
- G: Griedient.
- W: Weight in kilograms.

5#Calculate Frolling:</br>
Fr = 9.8067*cos(arctan(G/100))*WxCrr
- Crr: rolling resistance constant (0.005)

6#Calculate V(m/s) using Wattag.</br>
W = ((Fg+Fd) + 0.2V^2))*V</br>or</br>
0.2x^3+(Fg+Fd)x-Wattage=0
More Simplified:
0.2x^3+(Fg+Fd)x-305=0

7# Convert Speed V(m/s) to MPH or KMH </br>
KMH = (V * 3600) / 1000</br>
MPH = (V * 3600) / 1609.34
