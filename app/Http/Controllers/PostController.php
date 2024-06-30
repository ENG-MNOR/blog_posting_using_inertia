<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::latest()->paginate(6);
        return Inertia::render('Home', ['posts' => $posts]);
    }

    public function create()
    {
        return Inertia::render('Create');
    }

    public function store(Request $request)
    {
        $field = $request->validate([
            'body' => 'required',
        ]);

        // For testing, you can uncomment the following line to dump the request data
        // dd($request->all());

        Post::create($field);
        return redirect('/')->with('message', 'successfully inserted');

        // return redirect()->route('posts.index')->with('success', 'Post created successfully!');
    }

    public function show(Post $post)
    {
        return Inertia::render('Show', [
            'post' => $post,
        ]);
    }
    public function destroy(Post $post)
    {
        // dd($post);
        $post->delete();
        return redirect('/')->with('message', 'succfully deleted');
    }

    public function edit(Post $post)
    {
        // dd('succesfully');
        return Inertia::render('update', [
            'post' => $post,
        ]);
    }
    public function update(Request $request, Post $post)
    {
        // dd($request);

        $field = $request->validate([
            'body' => ['required'],
        ]);
        // dd('succesfully');
        $post->update($field);
        return redirect('/')->with('success', 'successfully updated');
    }
}
