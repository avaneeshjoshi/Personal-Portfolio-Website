/** Places for the travel globe. lat/lng in decimal degrees. */
export interface Place {
  name: string;
  lat: number;
  lng: number;
  region?: string;
  year?: number;
  note?: string;
  /** Landmark pins get an icon instead of the square. */
  tag?: "home" | "school";
}

export const places: Place[] = [
  { name: "San Jose · San Francisco · Berkeley", lat: 37.3382, lng: -121.8863, tag: "home" },
  { name: "Las Vegas", lat: 36.1699, lng: -115.1398, region: "Nevada" },
  { name: "Salt Lake City", lat: 40.7608, lng: -111.891, region: "Utah" },
  { name: "New York City", lat: 40.7128, lng: -74.006, region: "New York" },
  { name: "Orlando", lat: 28.5383, lng: -81.3792, region: "Florida" },
  { name: "Miami", lat: 25.7617, lng: -80.1918, region: "Florida" },
  { name: "Cancún", lat: 21.1619, lng: -86.8515, region: "Quintana Roo, Mexico" },
  { name: "Montreal", lat: 45.5019, lng: -73.5674, region: "Québec, Canada" },
  { name: "Quebec City", lat: 46.8139, lng: -71.208, region: "Québec, Canada" },
  { name: "Banff", lat: 51.1784, lng: -115.5708, region: "Alberta, Canada" },
  { name: "Hyderabad", lat: 17.385, lng: 78.4867, region: "Telangana, India" },
  { name: "Bangalore", lat: 12.9716, lng: 77.5946, region: "Karnataka, India" },
  { name: "Mumbai", lat: 19.076, lng: 72.8777, region: "Maharashtra, India" },
  // Add more: { name: "Tokyo", lat: 35.6762, lng: 139.6503, region: "Japan", year: 2027 },
];
