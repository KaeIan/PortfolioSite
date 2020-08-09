using System;
using System.ComponentModel.DataAnnotations;

namespace PersonalSite.Models
{
	/// <summary>
	/// Everything contained within a single blog post.
	/// </summary>
	public class BlogPost : AbstractModel
	{
		/// <summary>
		/// Gets or sets blog content.
		/// </summary>
		[Required]
		public string Content { get; set; }

		/// <summary>
		/// Gets or sets the header image for the blog.
		/// </summary>
		public string HeaderImagePath { get; set; }

		/// <summary>
		/// Gets or sets the title of the blog.
		/// </summary>
		public string Title { get; set; }

		public Guid BlogId { get; set; }

		public Blog Blog { get; set; }
	}
}