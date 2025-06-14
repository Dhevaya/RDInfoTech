import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import images
import ado from '../../assets/ado.png';

// Added fallback import for Adobe image to ensure visibility
import adobeFallback from '../../assets/Adobe.jpg';
import alteryx from '../../assets/alteryx.webp';
import android from '../../assets/android.jpg';
import angular from '../../assets/angular.webp';
import appium from '../../assets/appium.webp';
import autocad from '../../assets/autocad.jpg';
import aws from '../../assets/aws.jpg';
import azure from '../../assets/micro-azure.png';
import businessAnalyst from '../../assets/BA.webp';
import bootstrap from '../../assets/bootstrap.jpg';
import cprogramming from '../../assets/cprogramming.png';
import cPlusPlus from '../../assets/c++.jpg';
import coreJava from '../../assets/corejava.jpg';
import dataAnalytics from '../../assets/dataana.jpg';
import dataScience from '../../assets/datasci.jpg';
import devops from '../../assets/deveops.jpeg';
import digitalMarketing from '../../assets/digitalmarketing.jpg';
import django from '../../assets/django.png';
import deepLearning from '../../assets/DL.webp';
import dotnet from '../../assets/dotnet.jpg';
import dsaTraining from '../../assets/dsa-training.png';
import dsaFallback from '../../assets/dsa.jpg';
import excel from '../../assets/excel.jpeg';
import flutterImg from '../../assets/flutter.webp';
import frontend from '../../assets/fran.png';
import google from '../../assets/google.png';
import gcpPartner from '../../assets/gcp-partner.png';
import html from '../../assets/html.png';
import ios from '../../assets/ios.webp';
import java from '../../assets/java.jpg';
import javascript from '../../assets/javascript.png';
import laravel from '../../assets/laravel.png';
import magento from '../../assets/magento.webp';
import manualTesting from '../../assets/manual.png';
import mean from '../../assets/mean.jpg';
import mern from '../../assets/mern.jpg';
import machineLearning from '../../assets/ML.webp';
import mysql from '../../assets/mysql.jpg';
import nodejs from '../../assets/nodejs.png';

import performanceTesting from '../../assets/Performancetesting.jpg';
import photoshop from '../../assets/photoshop.jpg';
import php from '../../assets/php.jpg';
import powerBi from '../../assets/powerbi.jpg';
import python from '../../assets/python.jpg';
import rprogramming from '../../assets/rprogramming.png';
import reactJs from '../../assets/reactjs.jpg';
import rpa from '../../assets/rpa.jpg';
import selenium from '../../assets/selenium.jpg';
import sketchup from '../../assets/Sketchup.webp';
import softwareTesting from '../../assets/softwaretesting.jpg';
import tableau from '../../assets/tableau.jpg';
import uxUi from '../../assets/ux-ui.webp';
import vue from '../../assets/v.jpg';
import wordpress from '../../assets/wordpress.jpg';
import ethicalHacking from '../../assets/ethical-hacking.webp';
import threed from '../../assets/threed.jpeg';
import advancejava from '../../assets/advance-java.png';
import vray from '../../assets/v-ray.png';
import threeD from '../../assets/threeD.png';
import revit from '../../assets/revite.png';

// Image mapping using imported variables
const imageMap = {
  'python-full-stack-web-development-training': python,
  'java-full-stack-training-course': java,
  'dotnet-full-stack-web-development-training': dotnet,
  'php-full-stack-web-development-training': php,
  'mean-stack-web-development-training': mean,
  'android-training': android,
  'data-science-training': dataScience,
  'data-analytics-training': dataAnalytics,
  'software-testing-training': softwareTesting,
  'digital-marketing-training': digitalMarketing,
  'ux-ui-training': uxUi,
  'ethical-hacking-training': ethicalHacking,
  'graphic-design-training': photoshop,
  'autocad-training': autocad,
  'core-java-training': coreJava,
  'c++-training': cPlusPlus,
  'devops-training': devops,
  'uipath-rpa-training': rpa,
  'excel-training': excel,
  'power-bi-training': powerBi,
  'tableau-training': tableau,
  'alteryx-training': alteryx,
  'machine-learning-training': machineLearning,
  'deep-learning-training': deepLearning,
  'html-training': html,
  'css-training': html,
  'javascript-training': javascript,
  'react-js-training': reactJs,
  'nodejs-training': nodejs,
  'vue-js-training': vue,
  'angular-training': angular,
  'django-training': django,
  'laravel-training': laravel,
  'flutter-training': flutterImg,
  'flutter-app-development-training': flutterImg,
  'bootstrap-training': bootstrap,
  'wordpress-training': wordpress,
  'frontend-training': frontend,
  'mern-training': mern,
  'mean-training': mean,
  'adobe-training': ado,
  'adobe-illustrator-training': adobeFallback,
  'magento-training': magento,
  'google-training': google,
  'gcp-training': gcpPartner,
  'mysql-training': mysql,
  'c-training': cprogramming,
  'c-programming-training': cprogramming,
  'c++-training': cPlusPlus,
  'r-training': rprogramming,
  'r-programming-training': rprogramming,
  'ios-training': ios,
  'selenium-training': selenium,
  '3ds-max-training': threed,
  'appium-training': appium,
  'aws-solution-architect-training': aws,
  'microsoft-azure-training': azure,
  'business-analyst-training': businessAnalyst,
  'data-structures-&-algorithm-training': dsaTraining,
  'mern-stack-web-development-training': mern,
  'manual-testing-training': manualTesting,
  'performance-testing-training': performanceTesting,
  'photoshop-training': photoshop,
  'php-training': php,
  'python-training': python,
  'sketchup-training': sketchup,
  'v-ray-training': vray,
  '3d-training': threeD,
  'advance-java-training': advancejava,
  'advanced-java-training': advancejava,
  'revit-training-course': revit,
  'html-css-training': html,
  'data-structures-algorithm-training': dsaTraining,
  'react-native-training': reactJs,
  'business-analytics-training': dataAnalytics,
  'dot-net-training': dotnet,
  'microsoft-power-bi-training': powerBi,
  'advanced-excel-training': excel,
  'selenium-automation-training': selenium,
};


// Remove the `image` prop since we only want to use local assets
const ProductCard = ({ title, description }) => {
  const navigate = useNavigate();

  // Fallback values in case API data is missing fields
  const displayTitle = title || 'Untitled Course';
  const displayDescription = description || 'No description available.';
  // Map title to image path, always using the local assets
  const coursePath = displayTitle.toLowerCase().replace(/\s+/g, '-');
  // Add fallback for NodeJS image to online image
  let displayImage = imageMap[coursePath] || '/placeholder.jpg';
  if (coursePath === 'node-js-training' && !imageMap[coursePath]) {
    displayImage = nodejsFallback;
  }

  const handleViewCourse = () => {
    // Create a URL-friendly version of the course title
    const coursePath = displayTitle.toLowerCase().replace(/\s+/g, '-');
    navigate(`/course/${coursePath}`);
  };

  return (
    <div className="rounded-lg shadow-md bg-white overflow-hidden flex flex-col border border-[#280E5C]/20 max-w-sm w-full mx-auto mb-6">
      <div className="bg-[#280E5C] p-3 flex items-center justify-center">
        <img
          src={displayImage}
          alt={displayTitle}
          className="rounded-md object-cover w-full h-32 md:h-36"
          style={{ maxHeight: '144px' }}
          onError={(e) => (e.target.src = '/placeholder.jpg')}
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3
          className="text-lg font-bold text-[#280E5C] mb-2 text-center"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {displayTitle}
        </h3>
        <p
          className="text-sm text-gray-600 mb-4 text-center flex-1"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {displayDescription}
        </p>
        <button
          className="bg-[#280E5C] text-white rounded-md px-5 py-2 font-semibold text-sm mt-auto hover:bg-[#3b2d71] transition-colors mx-auto block"
          onClick={handleViewCourse}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          View Course
        </button>
      </div>
    </div>
  );
};

export default ProductCard;