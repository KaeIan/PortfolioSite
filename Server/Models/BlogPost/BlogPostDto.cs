using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PersonalSite.Models
{
	/// <summary>
	/// Everything contained within a single blog post.
	/// </summary>
	public class BlogPostDto : ModelDto<BlogPost>, IModelDto<BlogPost>
	{
		/// <summary>
		/// Gets or sets blog content.
		/// </summary>
		public string Content { get; set; }

		/// <summary>
		/// Gets or sets the header image for the blog.
		/// </summary>
		public string HeaderImagePath { get; set; }

		/// <summary>
		/// Gets or sets the title of the blog.
		/// </summary>
		public string Title { get; set; }

		public BlogPostDto(BlogPost model)
		{
			LoadEntity(model);
		}

		public BlogPostDto() { }

		public ModelDto<BlogPost> LoadEntity(BlogPost model)
		{
			Id = model.Id;
			Creation = model.Creation;
			Updated = model.Updated;
			HeaderImagePath = model.HeaderImagePath;
			Title = model.Title;
			Content = model.Content;
			return this;
		}

		public BlogPost ToEntity()
		{
			return new BlogPost
			{
				Id = Id,
				Creation = Creation,
				Updated = Updated,
				Title = Title,
				HeaderImagePath = HeaderImagePath,
			};
		}
	}
}