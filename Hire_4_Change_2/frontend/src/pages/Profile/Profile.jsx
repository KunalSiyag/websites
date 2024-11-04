import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('profile');
  const [isJobsMenuOpen, setIsJobsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleJobClick = (e) => {
    navigate("/search/" + e);
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const username = localStorage.getItem('username');
        if (!username) {
          throw new Error('User not logged in');
        }

        const response = await fetch(`https://us-central1-hire4change.cloudfunctions.net/user/profile?username=${username}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const data = await response.json();
        if (response.ok) {
          setUserData(data);
        } else {
          setError('Failed to fetch user profile');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setError('Error fetching user profile');
      }
    };

    fetchUserProfile();
  }, []);

  const handlePortfolioSubmit = async (e) => {
    e.preventDefault();
    try {
      const username = localStorage.getItem('username');
      if (!username) {
        alert('User not logged in');
        return;
      }

      const portfolioData = {
        username,
        title: e.target.portfolioTitle.value,
        description: e.target.portfolioDescription.value,
        images: e.target.portfolioImages.value.split(',').map(img => img.trim()),
        link: e.target.portfolioLink.value,
      };

      const response = await fetch('https://us-central1-hire4change.cloudfunctions.net/user/add-portfolio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(portfolioData)
      });

      const result = await response.json();
      if (response.ok) {
        alert('Portfolio updated successfully!');
        fetchUserProfile();
      } else {
        alert('Error updating portfolio: ' + result.error);
      }
    } catch (error) {
      console.error('Error submitting portfolio:', error);
    }
  };

  const handleWorkExperienceSubmit = async (e) => {
    e.preventDefault();
    try {
      const username = localStorage.getItem('username');
      if (!username) {
        alert('User not logged in');
        return;
      }

      const workData = {
        username,
        title: e.target.workTitle.value,
        company: e.target.workCompany.value,
        location: e.target.workLocation.value,
        from: e.target.workFrom.value,
        to: e.target.workTo.value,
        description: e.target.workDescription.value,
      };

      const response = await fetch('https://us-central1-hire4change.cloudfunctions.net/user/add-work-experience', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(workData)
      });

      const result = await response.json();
      if (response.ok) {
        alert('Work experience updated successfully!');
        fetchUserProfile();
      } else {
        alert('Error updating work experience: ' + result.error);
      }
    } catch (error) {
      console.error('Error submitting work experience:', error);
    }
  };

  const handleJobMenuClick = (tab) => {
    setActiveTab(tab);
    setIsJobsMenuOpen(false);
  };

  if (error) return <div className="text-red-500">{error}</div>;
  return (
    <div className="min-h-[80vh] p-10">
    <div className="border-b border-gray-200 mb-6">
      <nav className="relative flex justify-end">
        <button
          onClick={() => setActiveTab('profile')}
          className={`py-2 px-4 text-2xl font-semibold ${activeTab === 'profile' ? 'border-b-2 border-orange-500 text-blue-500' : 'text-gray-600'}`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab('education')}
          className={`py-2 px-4 text-2xl font-semibold ${activeTab === 'education' ? 'border-b-2 border-orange-500 text-blue-500' : 'text-gray-600'}`}
        >
          Education
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`py-2 px-4 text-2xl font-semibold ${activeTab === 'reviews' ? 'border-b-2 border-orange-500 text-blue-500' : 'text-gray-600'}`}
        >
          Reviews
        </button>
        <div className='relative'>
        <button
          onClick={() => setIsJobsMenuOpen(!isJobsMenuOpen)}
          className={`py-2 px-4 text-2xl font-semibold ${isJobsMenuOpen ? 'border-b-2 border-orange-500 text-blue-500' : 'text-gray-600'}`}
        >
          My Jobs
        </button>
        <div className=''>
        {isJobsMenuOpen && (
          <div className="absolute bg-white border border-gray-300 shadow-md rounded-md mt-2 right-0">
            <button
              onClick={() => handleJobMenuClick('completedJobs')}
              className={`block px-4 py-2 text-lg ${activeTab === 'completedJobs' ? 'bg-gray-200' : ''}`}
            >
              Completed 
            </button>
            <button
              onClick={() => handleJobMenuClick('postedJobs')}
              className={`block px-4 py-2 text-lg ${activeTab === 'postedJobs' ? 'bg-gray-200' : ''}`}
            >
              Posted 
            </button>
            <button
              onClick={() => handleJobMenuClick('savedJobs')}
              className={`block px-4 py-2 text-lg ${activeTab === 'savedJobs' ? 'bg-gray-200' : ''}`}
            >
              Saved 
            </button>
            <button
              onClick={() => handleJobMenuClick('assignedJobs')}
              className={`block px-4 py-2 text-lg ${activeTab === 'assingedJobs' ? 'bg-gray-200' : ''}`}
            >
              Assigned 
            </button>
          </div>
          
        )}
        </div>
        </div>
        <button
          onClick={() => setActiveTab('certifications')}
          className={`py-2 px-4 text-2xl font-semibold ${activeTab === 'certifications' ? 'border-b-2 border-orange-500 text-blue-500' : 'text-gray-600'}`}
        >
          Certifications
        </button>
        <button
          onClick={() => setActiveTab('portfolio')}
          className={`py-2 px-4 text-2xl font-semibold ${activeTab === 'portfolio' ? 'border-b-2 border-orange-500 text-blue-500' : 'text-gray-600'}`}
        >
          Portfolio
        </button>
        <button
          onClick={() => setActiveTab('work')}
          className={`py-2 px-4 text-2xl font-semibold ${activeTab === 'work' ? 'border-b-2 border-orange-500 text-blue-500' : 'text-gray-600'}`}
        >
          Work Experience
        </button>
      </nav>
    </div>

      {activeTab === 'profile' && (
        <div>
          <div className="flex justify-center items-center mb-6">
            <img
              className="w-[20vw] h-[20vw] object-cover rounded-2xl border-2 border-zinc-800 bg-center"
              src={userData?.profilePictureUrl || 'default-profile-picture-url'}
              alt="Profile Picture"
            />
           <div className="ml-6">
  <table className="min-w-full divide-y divide-gray-200">

    <tbody className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-2xl font-medium text-gray-900">Username</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{userData?.username}</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-2xl font-medium text-gray-900">Email</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{userData?.email}</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-2xl font-medium text-gray-900">Phone Number</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{userData?.phoneNumber}</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-2xl font-medium text-gray-900">Bio</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{userData?.bio}</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-2xl font-medium text-gray-900">Freelancer Rating</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{userData?.ratings?.asFreelancer?.toFixed(1) || 'N/A'}</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-2xl font-medium text-gray-900">Employer Rating</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{userData?.ratings?.asEmployer?.toFixed(1) || 'N/A'}</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-2xl font-medium text-gray-900">Skills</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{userData?.skills?.join(', ')}</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-2xl font-medium text-gray-900">Languages</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{userData?.languages?.join(', ')}</td>
      </tr>
    </tbody>
  </table>
</div>

          </div>
        </div>
      )}

{activeTab === 'portfolio' && (
  <div>
    <h2 className="text-4xl font-semibold mb-2">Portfolio</h2>
    
    <div>
      {userData?.portfolioItems?.length ? (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Images</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Link</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {userData.portfolioItems.map(item => (
              <tr key={item.title}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.images.length > 0 && (
                    <div className="flex space-x-2">
                      {item.images}
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                  {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer">View Project</a>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No portfolio items available</p>
      )}
      <form onSubmit={handlePortfolioSubmit} className="flex mt-36 flex-col mb-6">
      <input name="portfolioTitle" type="text" placeholder="Title" className="border p-2 mb-2" required />
      <textarea name="portfolioDescription" placeholder="Description" className="border p-2 mb-2" required />
      <input name="portfolioImages" type="text" placeholder="Images (comma-separated URLs)" className="border p-2 mb-2" required />
      <input name="portfolioLink" type="url" placeholder="Link" className="border p-2 mb-2" />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Add Portfolio Item</button>
    </form>
    </div>
  </div>
)}

{activeTab === 'work' && (
  <div>
    <h2 className="text-4xl font-semibold mb-2">Work Experience</h2>
    <div>
      {userData?.workExperience?.length ? (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {userData.workExperience.map(exp => (
              <tr key={exp.title}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{exp.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exp.company}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exp.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(exp.from).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(exp.to).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exp.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No work experience available</p>
      )}
      <form onSubmit={handleWorkExperienceSubmit} className="flex mt-36  h-[60vh] flex-col mb-6">
      <input name="workTitle" type="text" placeholder="Title" className="border p-2 mb-2" required />
      <input name="workCompany" type="text" placeholder="Company" className="border p-2 mb-2" required />
      <input name="workLocation" type="text" placeholder="Location" className="border p-2 mb-2" required />
      <input name="workFrom" type="date" placeholder="From" className="border p-2 mb-2" required />
      <input name="workTo" type="date" placeholder="To" className="border p-2 mb-2" required />
      <textarea name="workDescription" placeholder="Description" className="border p-2 mb-2" required />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Add Work Experience</button>
    </form>
    </div>
  </div>
)}

{activeTab === 'education' && (
  <div>
    <h2 className="text-4xl font-semibold mb-2">Education</h2>
    {userData?.education?.length ? (
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Degree</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Institution</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field of Study</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {userData.education.map(edu => (
            <tr key={edu.degree}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{edu.degree}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{edu.institution}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{edu.fieldOfStudy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No education information available</p>
    )}
  </div>
)}

{activeTab === 'reviews' && (
  <div>
    <h2 className="text-4xl font-semibold mb-2">Reviews</h2>
    {userData?.reviews?.length ? (
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comment</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {userData.reviews.map(review => (
            <tr key={review.rating}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{review.comment}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{review.rating.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No reviews available</p>
    )}
  </div>
)}

{activeTab === 'completedJobs' && (
  <div>
    <h2 className="text-4xl font-semibold mb-2">Completed Jobs</h2>
    {userData?.completedJobs?.length ? (
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {userData.completedJobs.map(job => (
            <tr key={job.title} onClick={() => handleJobClick(job.job)}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{job.job}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No completed jobs available</p>
    )}
  </div>
)}
{activeTab === 'assignedJobs' && (
  <div>
    <h2 className="text-4xl font-semibold mb-2">Assigned Jobs</h2>
    {userData?.activeJobs?.length ? (
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {userData.activeJobs.map(job => (
            <tr key={job.title} onClick={() => handleJobClick(job.jobId)}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{job.jobId}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.jobTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No assigned jobs available</p>
    )}
  </div>
)}
{activeTab === 'savedJobs' && (
  <div>
    <h2 className="text-4xl font-semibold mb-2">Saved Jobs</h2>
    {userData?.savedJobs?.length ? (
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {userData.savedJobs.map(job => (
            <tr key={job.title} onClick={() => handleJobClick(job.jobId)}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{job.jobId}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.jobTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No saved jobs available</p>
    )}
  </div>
)}
{activeTab === 'postedJobs' && (
  <div>
    <h2 className="text-4xl font-semibold mb-2">Posted Jobs</h2>
    {userData?.postedJobs?.length ? (
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {userData.postedJobs.map(job => (
            <tr key={job.id} onClick={() => handleJobClick(job.jobId)} className="cursor-pointer hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{job.jobId}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.jobTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No posted jobs available</p>
    )}
  </div>
)}
{activeTab === 'certifications' && (
  <div>
    <h2 className="text-4xl font-semibold mb-2">Certifications</h2>
    {userData?.certifications?.length ? (
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certification</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issuer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Obtained</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {userData.certifications.map(cert => (
            <tr key={cert.name}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cert.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cert.issuer}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(cert.dateObtained).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No certifications available</p>
    )}
  </div>
)}

{activeTab === 'certifications' && (
  <div>
    <h2 className="text-4xl font-semibold mb-2">Certifications</h2>
    {userData?.certifications?.length ? (
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certification</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issuer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Obtained</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {userData.certifications.map(cert => (
            <tr key={cert.name}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cert.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cert.issuer}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(cert.dateObtained).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No certifications available</p>
    )}
  </div>
      )}
    </div>
  );
};

export default UserProfile;
