# BikeCalculator
bike calculate for the average speed depending on the cyclist age

1#User input:
- age.
- total weight (bike + rider).

2#All unite should be in metricl for calculation.

3#Calculate Fgravity:
Fg = 9.8067*sin(arctan(G/100))*W
- G: Griedient.
- W: Weight in kilograms.

4#Calculate Frolling:
Fr = 9.8067*cos(arctan(G/100))*WxCrr
- Crr: rolling resistance constant

5#Calculate V(m/s) using Wattag.
W = ((Fg+Fd) + 0.2V^2))*V
