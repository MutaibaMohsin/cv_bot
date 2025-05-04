// src/pages/Dashboard.js
import React from 'react';
import { Box, Button, Typography, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const navigate = useNavigate();

  const data = {
    labels: ['Programming Skills', 'Other Skills'],
    datasets: [
      {
        label: 'Skill Match',
        data: [80, 20], // Static percentage for now
        backgroundColor: ['#4caf50', '#e0e0e0'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ p: 3 }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/chatbot')}>
          Start Chat
        </Button>
      </Grid>

      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Programming Skills Match</Typography>
              <Doughnut data={data} />
              <Typography align="center" mt={2}>
                Based on CV Analysis
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Add more cards or stats here as needed */}
      </Grid>
    </Box>
  );
};

export default Dashboard;
