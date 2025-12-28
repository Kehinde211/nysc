"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export interface Tasks {
  pending: number;
  urgent: number;
}

type Announcement = {
  id: string;
  title: string;
  content: string;
};

type PpaReview = {
  id: string;
  name: string;
  status: string;
};

const QuickDetailsPage = ({ pending, urgent }: Tasks) => {
  const router = useRouter();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [ppaReviews, setPpaReviews] = useState<PpaReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAnnouncements = async () => {
      try {
        const response = await fetch("/api/announcements");
        if (!response.ok) {
          throw new Error("Unable to fetch announcements");
        }
        const data = await response.json();
        setAnnouncements(data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };
    getAnnouncements();
  }, []);

  useEffect(() => {
    const getPPAReviews = async () => {
      try {
        const response = await fetch("/api/ppareviews"); 
        if (!response.ok) {
          throw new Error("Unable to fetch PPA reviews");
        }
        const data = await response.json();
        setPpaReviews(data);
      } catch (error) {
        console.error("Error fetching PPA reviews:", error);
      } finally {
        setLoading(false);
      }
    };
    getPPAReviews();
  }, []);

  return (
    <div className="flex flex-row justify-between gap-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Tasks Overview</h2>
        <p className="text-gray-700 mb-4">
          {pending} pending, {urgent} urgent tasks. Check your daily assignments and priorities.
        </p>
        <button
          onClick={() => router.push("/tasks")}
          className="rounded-md w-full px-5 py-3 bg-green-600 text-white hover:bg-[#008751] transition-colors"
        >
          View Tasks
        </button>
      </div>

      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Latest Announcements</h2>
        {loading ? (
          <p>Loading announcements...</p>
        ) : announcements.length > 0 ? (
          <div className="mb-4">
            <p className="font-semibold">{announcements[0].title}</p>
            <p className="text-gray-700">{announcements[0].content}</p>
            <p className="text-sm text-gray-500 mt-2">
              +{announcements.length - 1} more announcements
            </p>
          </div>
        ) : (
          <p className="text-gray-700 mb-4">No announcements available</p>
        )}
        <button
          onClick={() => router.push("/announcements")}
          className="rounded-md sm:text-[11px] lg:text-[14.5px] px-5 py-3 bg-green-600 text-white hover:bg-[#008751] w-full transition-colors"
        >
          Read Announcements
        </button>
      </div>

      {/* PPA Reviews Due */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">PPA Reviews Due</h2>
        <p className="text-gray-700 mb-4">
          {ppaReviews.length} pending reviews. Action required for performance appraisal.
        </p>
        <button
          onClick={() => router.push("/ppareviews")}
          className="rounded-md w-full px-5 py-3 bg-green-600 text-white hover:bg-[#008751] transition-colors"
        >
          Manage Reviews
        </button>
      </div>
    </div>
  );
};

export default QuickDetailsPage;