import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Homepage from "../Pages/Homepage";
import AboutUsPage from "../Pages/AboutUsPage";
import BookingPage from "../Pages/BookingPage";
import ContactUsPage from "../Pages/ContactUsPage";
import TherapyAndCounselling from "../Pages/Services/TherapyAndCounselling";
import BlogsPage from "../Pages/BlogsPage";
import AnxietyDisordersBlog from "../Pages/Blogs/AnxietyDisordersBlog";
import MentalIllnessBlog from "../Pages/Blogs/MentalIllnessBlog";
import SocialIsolationBlog from "../Pages/Blogs/SocialIsolationBlog";
import PsychiatricEvaluation from "../Pages/Services/PsychiatricEvaluation";
import MedicationManagement from "../Pages/Services/MedicationManagement";
import FamilyTherapy from "../Pages/Services/FamilyTherapy";
import ChildAdolescentPsychiatry from "../Pages/Services/ChildAndAdolescentPsychiatry";
import Telepsychiatry from "../Pages/Services/Telepsychiatry";
import Loader from "../Components/LoaderComponent";
import NotFoundPage from "../Pages/NotFoundPage";
import ParanoiaBlog from "../Pages/Blogs/ParanoiaBlog";
import CBTBlog from "../Pages/Blogs/CBTBlog";
import BipolarDisorderBlog from "../Pages/Blogs/BipolarDisorderBlog";
import SchizophreniaBlog from "../Pages/Blogs/BipolarDisorderBlog";
import ParkinsonsDiseaseBlog from "../Pages/Blogs/ParkinsonsBlog";
import InsomniaBlog from "../Pages/Blogs/InsomniaBlog";
import StressManagementBlog from "../Pages/Blogs/StressBlog";
import PerformanceAnxietyBlog from "../Pages/Blogs/PerformanceAnxietyBlog";
import SleepDisordersBlog from "../Pages/Blogs/SleepDisorderBlog";
import ExamStressBlog from "../Pages/Blogs/ExamStressBlog";
import DealingWithFailureBlog from "../Pages/Blogs/FacingFailuresHBlog";
import DealingWithFailureBlogEn from "../Pages/Blogs/DealingFailureBlog";
import SleepAndHealthBlog from "../Pages/Blogs/SleepAndHealthBlog";
import WomensMentalHealthLifespanBlog from "../Pages/Blogs/WomenBlog";
import SuicidePreventionBlog from "../Pages/Blogs/SuicidePreventionBlog";
import SuicideImpactBlog from "../Pages/Blogs/SuicideEffects";
import SocialMediaAddictionBlog from "../Pages/Blogs/TeensSocialMediaBlog";
import ResilienceBlog from "../Pages/Blogs/ResilienceBlog";
import PerformanceAnxietyStageFrightBlog from "../Pages/Blogs/StageFrightBlog";
import ChildMentalHealthSignsBlog from "../Pages/Blogs/ChildMentalBlog";
import EarlyPsychiatristPatnaBlog from "../Pages/Blogs/WhyEarlyPsychiatristConsultationBlog";
import ChildPsychiatryExplainedBlog from "../Pages/Blogs/ChildPsychiatryExplainedBlog";
import PsychotropicMedicinesExplainedBlog from "../Pages/Blogs/PsychotropicMedicinesBlog";
import MentalHealthSaferBlog from "../Pages/Blogs/MentalHealthManagementBlog";
import AnxietyToCalmBlog from "../Pages/Blogs/AnxietyToCalmBlog";
import ChildTeenAdultCareBlog from "../Pages/Blogs/ChildTeenAdultCareBlog";
import MeetTeam from "../Components/MeetTeam";

function AppRouter() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Trigger loading state when location changes
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [location]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/appointment" element={<BookingPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/meetTeam" element={<MeetTeam />} />
          <Route
            path="/services/psychiatric-consultation"
            element={<TherapyAndCounselling />}
          />

          <Route
            path="/services/mental-health-assessment"
            element={<PsychiatricEvaluation />}
          />
          <Route
            path="services/medication-management"
            element={<MedicationManagement />}
          />
          <Route
            path="services/child-and-adolescent-psychiatry"
            element={<ChildAdolescentPsychiatry />}
          />
          <Route path="services/telepsychiatry" element={<Telepsychiatry />} />
          <Route
            path="/services/neuropsychiatric-care"
            element={<FamilyTherapy />}
          />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route
            path="blog/anxiety-disorders-2024"
            element={<AnxietyDisordersBlog />}
          />
          <Route
            path="blog/mental-illness-2024"
            element={<MentalIllnessBlog />}
          />
          <Route
            path="blog/social-isolation-loneliness"
            element={<SocialIsolationBlog />}
          />
          <Route path="blog/paranoia" element={<ParanoiaBlog />} />
          <Route
            path="blog/cognitive-behavioral-therapy"
            element={<CBTBlog />}
          />
          <Route
            path="blog/bipolar-disorder"
            element={<BipolarDisorderBlog />}
          />
          <Route path="blog/schizophrenia" element={<SchizophreniaBlog />} />
          <Route
            path="blog/parkinsons-disease"
            element={<ParkinsonsDiseaseBlog />}
          />
          <Route path="blog/insomnia" element={<InsomniaBlog />} />
          <Route
            path="/blog/stress-affects-health"
            element={<StressManagementBlog />}
          />
          <Route
            path="/blog/beat-performance-anxiety"
            element={<PerformanceAnxietyBlog />}
          />
          <Route
            path="/blog/sleep-disorder-treatment"
            element={<SleepDisordersBlog />}
          />
          <Route
            path="/blog/overcome-exam-stress"
            element={<ExamStressBlog />}
          />
          <Route
            path="/blog/face-failures"
            element={<DealingWithFailureBlog />}
          />
          <Route
            path="/blog/deal-with-failures"
            element={<DealingWithFailureBlogEn />}
          />
          <Route
            path="/blog/sleep-and-health"
            element={<SleepAndHealthBlog />}
          />
          <Route
            path="/blog/womens-mental-health"
            element={<WomensMentalHealthLifespanBlog />}
          />
          <Route
            path="/blog/suicide-prevention"
            element={<SuicidePreventionBlog />}
          />
          <Route path="/blog/suicide-impact" element={<SuicideImpactBlog />} />
          <Route
            path="/blog/social-media-addiction"
            element={<SocialMediaAddictionBlog />}
          />
          <Route
            path="/blog/building-resilience"
            element={<ResilienceBlog />}
          />
          <Route
            path="/blog/stage-fright-performance-anxiety"
            element={<PerformanceAnxietyStageFrightBlog />}
          />
          <Route
            path="/blog/mental-disorders-children"
            element={<ChildMentalHealthSignsBlog />}
          />
          <Route
            path="/blog/early-psychiatrist-evaluation"
            element={<EarlyPsychiatristPatnaBlog />}
          />
          <Route
            path="/blog/child-psychiatry-explanation"
            element={<ChildPsychiatryExplainedBlog />}
          />
          <Route
            path="/blog/psychotropic-medicines-management-patna"
            element={<PsychotropicMedicinesExplainedBlog />}
          />
          <Route
            path="/blog/depression-medication-oversight-patna"
            element={<MentalHealthSaferBlog />}
          />
          <Route
            path="/blog/from-anxiety-to-calm-at-manah"
            element={<AnxietyToCalmBlog />}
          />
          <Route
            path="/blog/care-for-all-ages-manah"
            element={<ChildTeenAdultCareBlog />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </>
  );
}

export default AppRouter;
