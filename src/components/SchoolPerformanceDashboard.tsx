
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from "recharts";

const subjectPerformanceData = [
  { subject: "Science", pass: 74.33, fail: 25.67 },
  { subject: "Phys. Ed", pass: 94.33, fail: 5.67 },
  { subject: "Maths", pass: 73.33, fail: 26.67 },
  { subject: "English", pass: 76.67, fail: 23.33 },
  { subject: "Arts", pass: 83.33, fail: 16.67 },
];

const enrollmentData = [
  { year: "2021", students: 67, forecast: null },
  { year: "2022", students: 104, forecast: null },
  { year: "2023", students: 129, forecast: null },
  { year: "2024", students: 229, forecast: 229 },
  { year: "2025", students: 274, forecast: 274 },
  { year: "2026", students: null, forecast: 318 },
];

const SchoolPerformanceDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Students Retention</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">91.32%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Faculty Retention</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">91.65%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">300</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Teachers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Student Performance by Subject</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart
                data={subjectPerformanceData}
                layout="vertical"
                stackOffset="expand"
                barSize={20}
              >
                <XAxis type="number" unit="%" />
                <YAxis type="category" dataKey="subject" />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="pass" fill="#22c55e" name="Pass" stackId="stack" />
                <Bar dataKey="fail" fill="#ef4444" name="Fail" stackId="stack" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Students Enrollment by Year</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="students"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.3}
                  name="Actual"
                />
                <Line
                  type="monotone"
                  dataKey="forecast"
                  stroke="#82ca9d"
                  strokeDasharray="5 5"
                  name="Forecast"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SchoolPerformanceDashboard;
