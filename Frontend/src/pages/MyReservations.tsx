import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "@/api/axios";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MessageSquare } from "lucide-react";
import CancelModal from "@/components/Cancle";
import { Link } from "react-router-dom";


interface Reservation {
  _id: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}

const formatDate = (isoString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(isoString).toLocaleDateString("en-US", options);
};

const MyReservations = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedReservationId, setSelectedReservationId] = useState<string | null>(null);

  useEffect(() => {
    const fetchReservations = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await axios.get("/user/reservations");
        setReservations(response.data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  const handleCancel = async () => {
    if (!selectedReservationId) return;

    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      await axios.delete(`/booking/${selectedReservationId}`);

      setReservations((prev) =>
        prev.filter((r) => r._id !== selectedReservationId)
      );
      setShowModal(false);
      setSelectedReservationId(null);
    } catch (error) {
      console.error("Error cancelling reservation:", error);
      alert("Failed to cancel reservation.");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center bg-fixed px-6 py-16 relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-white tracking-wide">
            My Reservations
          </h2>
          <div className="w-16 h-1 bg-gold mt-3 rounded-full"></div>
        </motion.div>

        {loading ? (
          <p className="text-lg text-white font-medium text-center">
            Loading...
          </p>
        ) : reservations.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
            <p className="text-white text-xl font-medium mb-6">
              You have no reservations yet.
            </p>
            <Link to={'/booking'}>
            <Button
              variant="default"
              className="bg-gold text-black hover:bg-gold-dark px-6 py-3 text-lg"
              >
              Book Now
            </Button>
            </Link>

          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center"
          >
            {reservations.map((reservation) => (
              <Card
                key={reservation._id}
                className="border border-gold bg-background/80 backdrop-blur-lg shadow-lg rounded-2xl overflow-hidden w-full max-w-sm"
              >
                <CardContent className="flex flex-col space-y-4 p-6">
                  <div className="flex items-center space-x-2 text-gold font-semibold text-lg">
                    <Calendar size={20} />
                    <span>{formatDate(reservation.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-foreground">
                    <Users size={20} />
                    <span>{reservation.guests} Guests</span>
                  </div>
                  {reservation.specialRequests && (
                    <div className="flex items-center space-x-2 text-muted-foreground italic">
                      <MessageSquare size={20} />
                      <span>{reservation.specialRequests}</span>
                    </div>
                  )}

                  <Button
                    variant="outline"
                    className="mt-6 w-full border-gold text-gold hover:bg-gold hover:text-black transition-all"
                    onClick={() => {
                      setSelectedReservationId(reservation._id);
                      setShowModal(true);
                    }}
                  >
                    Cancel Reservation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        )}
      </div>

      <CancelModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleCancel}
      />
    </div>
  );
};

export default MyReservations;
